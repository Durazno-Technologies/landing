const { OAuth2Client } = require('google-auth-library');
const { Firestore } = require('@google-cloud/firestore');
const crypto = require('crypto');

const firestore = new Firestore();

// Allowed origins for CORS
const allowedOrigins = [
  'https://mentor.durazno.org',
];

// Token alphabet - excludes confusing characters (0,O,1,l,I)
const TOKEN_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
const TOKEN_PREFIX = 'dzn_';
const TOKEN_LENGTH = 32; // 32 chars after prefix = ~190 bits of entropy
const TOKEN_EXPIRY_DAYS = 365; // 1 year

/**
 * Generate a cryptographically secure token
 * Uses crypto.randomBytes() - same CSPRNG used by Bitcoin/OpenSSL
 */
const generateSecureToken = () => {
  const bytes = crypto.randomBytes(TOKEN_LENGTH);
  let token = TOKEN_PREFIX;

  for (let i = 0; i < TOKEN_LENGTH; i++) {
    // Use modulo to map random byte to alphabet index
    token += TOKEN_ALPHABET[bytes[i] % TOKEN_ALPHABET.length];
  }

  return token;
};

/**
 * Hash a token using SHA-256 (same algorithm used by Bitcoin)
 */
const hashToken = (token) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

/**
 * Get CORS headers based on request origin
 */
const getCorsHeaders = (origin) => {
  const isAllowed = allowedOrigins.includes(origin);
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
};

/**
 * HTTP Cloud Function to handle Google OAuth callback
 */
exports.authCallback = async (req, res) => {
  const origin = req.get('Origin') || '';
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.set(corsHeaders);
    res.status(204).send('');
    return;
  }

  res.set(corsHeaders);

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { code, role, redirectUri } = req.body;

    if (!code) {
      res.status(400).json({ error: 'Authorization code is required' });
      return;
    }

    if (!role || !['mentor', 'mentee'].includes(role)) {
      res.status(400).json({ error: 'Valid role (mentor/mentee) is required' });
      return;
    }

    // Get credentials from environment variables (mapped from Secret Manager)
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      console.error('Missing OAuth credentials in environment');
      res.status(500).json({ error: 'Server configuration error' });
      return;
    }

    // Create OAuth2 client
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

    // Exchange authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info from ID token
    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Check if user already exists
    const usersRef = firestore.collection('users');
    const existingUser = await usersRef.where('googleId', '==', googleId).get();

    let userId;
    let apiToken = null;
    let isNewUser = existingUser.empty;
    const timestamp = Firestore.Timestamp.now();

    if (isNewUser) {
      // Generate new API token for new users
      apiToken = generateSecureToken();
      const tokenHash = hashToken(apiToken);
      const tokenExpiresAt = new Date();
      tokenExpiresAt.setDate(tokenExpiresAt.getDate() + TOKEN_EXPIRY_DAYS);

      // Create new user with hashed token
      const newUserRef = await usersRef.add({
        googleId,
        email,
        name: name || null,
        picture: picture || null,
        role,
        isMentor: role === 'mentor',
        // Token stored as SHA-256 hash - never store plaintext
        tokenHash,
        tokenCreatedAt: timestamp,
        tokenExpiresAt: Firestore.Timestamp.fromDate(tokenExpiresAt),
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      userId = newUserRef.id;
      console.log(`New user created: ${userId} as ${role}`);
    } else {
      // Existing user - don't generate new token, they must regenerate manually
      userId = existingUser.docs[0].id;
      await usersRef.doc(userId).update({
        updatedAt: timestamp,
      });
      console.log(`Existing user logged in: ${userId}`);
    }

    // Return response - apiToken only included for new users (shown once!)
    const response = {
      success: true,
      userId,
      email,
      role: isNewUser ? role : existingUser.docs[0].data().role,
      isNewUser,
    };

    // IMPORTANT: Token is only returned on first registration
    // This is the ONLY time the user will see their plaintext token
    if (apiToken) {
      response.apiToken = apiToken;
      response.tokenExpiresAt = new Date(Date.now() + TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString();
    }

    res.status(200).json(response);

  } catch (error) {
    console.error('Auth callback error:', error);

    if (error.message?.includes('invalid_grant')) {
      res.status(400).json({ error: 'Invalid or expired authorization code' });
      return;
    }

    res.status(500).json({ error: 'Authentication failed' });
  }
};
