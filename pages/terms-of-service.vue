<template>
  <div class="min-h-screen gradient-bg">
    <div class="max-w-4xl mx-auto px-6 py-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to home
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-8">Terms of Service</h1>

      <div class="prose prose-invert prose-gray max-w-none">
        <p class="text-gray-400 text-lg mb-8">
          Last updated: {{ formattedDate }}
        </p>

        <div class="space-y-8 text-gray-300">
          <section>
            <h2 class="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By creating an account on Durazno, you accept these terms of service and our
              <NuxtLink to="/privacy-policy" class="text-purple-400 hover:text-purple-300">
                privacy policy
              </NuxtLink>. If you do not agree, do not use the platform.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p>
              Durazno is a free platform that facilitates connections between people seeking
              mentorship and professionals willing to share their experience.
              We are <strong class="text-white">not intermediaries</strong> in mentorship
              relationships that may form.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">3. Usage Requirements</h2>
            <p>To use Durazno you must:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide truthful information about your skills and certifications</li>
              <li>Not impersonate another person</li>
              <li>Use the platform for legitimate professional mentorship purposes</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">4. Certification Validation</h2>
            <p>
              Durazno reserves the right to request evidence to validate professional certifications.
              Unverified certifications will be shown as "pending validation". Providing false
              information may result in account suspension.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">5. Expected Conduct</h2>
            <p>Durazno users must:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Treat other users with respect</li>
              <li>Not request or offer paid services through the platform</li>
              <li>Not send spam or unsolicited content</li>
              <li>Report inappropriate behavior</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              Durazno facilitates connections but <strong class="text-white">does not guarantee</strong>
              the quality, availability, or outcomes of mentorships. We are not responsible
              for agreements, disputes, or situations that arise between users outside the platform.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p>
              The content, design, and code of Durazno are property of its creators.
              You may not copy, modify, or distribute any element of the platform
              without written authorization.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">8. Termination</h2>
            <p>
              We may suspend or delete your account if you violate these terms. You may
              delete your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <p>
              We may update these terms occasionally. We will notify you of significant changes
              by email. Continued use of the platform implies acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">10. Contact</h2>
            <p>
              For inquiries about these terms:
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
  title: 'Terms of Service - Durazno'
})
</script>
