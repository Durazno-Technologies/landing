# Durazno

**Mentorship discovery for developers. Anonymous. Free. Open source.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## What is Durazno?

A platform that connects mentors and mentees in tech without the noise of social networks or the risk of paid charlatans.

- **Anonymous profiles** - Your skills speak, not your name
- **Verified credentials** - We validate certifications (OSCP, AWS, etc.)
- **Ephemeral connections** - Match, chat, exchange contact. Done.
- **Free forever** - No paid tiers, no premium mentors
- **CLI-first** - Built for developers who live in the terminal

## How it works

```
1. Register with Google OAuth
2. Get your API token (dzn_...)
3. Install the CLI: go install github.com/Durazno-Technologies/cli@latest
4. Enter the interactive shell: durazno login
5. Search, connect, mentor/learn
```

## Architecture

```
┌─────────────────────────────────────────┐
│              Interfaces                 │
├───────────┬───────────┬─────────────────┤
│    CLI    │   Bots    │    Web/Mobile   │
└─────┬─────┴─────┬─────┴────────┬────────┘
      └───────────┼──────────────┘
                  │
          ┌───────▼───────┐
          │   API Layer   │
          └───────┬───────┘
                  │
          ┌───────▼──────┐
          │   Database   │
          └──────────────┘
```

## Tech Stack

| Component | Technology |
|-----------|------------|
| Landing | Nuxt 3 + TailwindCSS |
| Auth | Google OAuth 2.0 |
| Backend | Google Cloud Functions |
| Database | Firestore |
| Hosting | Firebase Hosting |
| CLI | Go (interactive shell) |

## Security

- **Tokens**: Generated with `crypto.randomBytes()` (CSPRNG)
- **Storage**: SHA-256 hashed, never plaintext
- **CORS**: Restricted to `durazno.org` only
- **Secrets**: Google Secret Manager, never in code
- **Auth**: OAuth 2.0, no passwords stored

## Development

### Prerequisites

- Node.js 20+
- Google Cloud account
- Firebase CLI

### Setup

```bash
# Clone
git clone https://github.com/Durazno-Technologies/landing.git

# Install
npm install

# Run
npm run dev
```

### Scripts

```bash
npm run dev        # Development server
npm run generate   # Build static site
npm run deploy     # Build + deploy to Firebase
npm run clean      # Clear everything including node_modules
```

### Cloud Functions

```bash
cd functions/auth-callback
npm install

# Deploy (requires gcloud CLI configured)
gcloud functions deploy auth-callback \
  --gen2 \
  --runtime=nodejs20 \
  --trigger-http \
  --allow-unauthenticated \
  --set-secrets="GOOGLE_CLIENT_ID=your-secret:latest,GOOGLE_CLIENT_SECRET=your-secret:latest"
```

## Project Structure

```
durazno-landing/
├── components/          # Vue components
│   ├── HeroSection.vue
│   ├── ProblemSection.vue
│   ├── SolutionSection.vue
│   ├── HowItWorksSection.vue
│   ├── WaitlistForm.vue   # Now registration form
│   └── FooterSection.vue
├── pages/
│   ├── index.vue          # Landing page
│   ├── dashboard.vue      # Post-registration token display
│   ├── auth/callback.vue  # OAuth callback handler
│   ├── privacy-policy.vue
│   └── terms-of-service.vue
├── functions/
│   └── auth-callback/     # Cloud Function for OAuth + token generation
├── public/                # Static assets (favicons, etc.)
├── assets/css/            # Global styles
├── nuxt.config.ts
├── tailwind.config.js
└── firebase.json
```

## Related Repositories

| Repo | Description |
|------|-------------|
| [Durazno-Technologies/cli](https://github.com/Durazno-Technologies/cli) | CLI tool (Go) |
| [Durazno-Technologies/api](https://github.com/Durazno-Technologies/api) | API server (coming soon) |

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/something`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature/something`)
5. Create a Pull Request

## License

The Unlicense - See [LICENSE](LICENSE) for details.

## Links

- **Website**: [durazno.org](https://durazno.org)
- **Email**: hola@durazno.org

---

Made with care in Mexico for the world.
