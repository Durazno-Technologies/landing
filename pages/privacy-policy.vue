<template>
  <div class="min-h-screen gradient-bg">
    <div class="max-w-4xl mx-auto px-6 py-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to home
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-8">Privacy Policy</h1>

      <div class="prose prose-invert prose-gray max-w-none">
        <p class="text-gray-400 text-lg mb-8">
          Last updated: {{ formattedDate }}
        </p>

        <div class="space-y-8 text-gray-300">
          <section>
            <h2 class="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              When you sign up for Durazno using Google OAuth, we collect:
            </p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Your email address</li>
              <li>Your name (if available from your Google account)</li>
              <li>Your role preference (mentor or mentee)</li>
              <li>Skills and certifications you choose to add to your profile</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Create and maintain your account on the platform</li>
              <li>Facilitate connections between mentors and mentees</li>
              <li>Validate professional certifications and credentials</li>
              <li>Send you relevant notifications about the platform</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">3. Anonymity</h2>
            <p>
              Durazno is designed to protect your identity. Your real name and profile picture
              are <strong class="text-white">not displayed</strong> to other users. We only share
              information you choose to make public in your anonymous profile.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">4. Data Storage</h2>
            <p>
              Your data is securely stored on Google Cloud Platform (Firestore)
              with encryption at rest and in transit. We do not store passwords as we
              exclusively use Google OAuth for authentication.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p>
              We <strong class="text-white">do not sell or share</strong> your personal information
              with third parties for marketing purposes. We only share data when:
            </p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>It is necessary to validate certifications with issuing entities</li>
              <li>Required by law</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data in a readable format</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">7. Contact</h2>
            <p>
              For any privacy inquiries, contact us at:
              <a href="mailto:hola@durazno.org" class="text-purple-400 hover:text-purple-300">
                hola@durazno.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formattedDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

useHead({
  title: 'Privacy Policy - Durazno',
  link: [
    { rel: 'canonical', href: 'https://mentor.durazno.org/privacy-policy/' }
  ],
  meta: [
    { property: 'og:url', content: 'https://mentor.durazno.org/privacy-policy/' }
  ]
})
</script>
