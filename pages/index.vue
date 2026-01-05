<template>
  <main>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <WaitlistForm />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
// SEO meta tags
useSeoMeta({
  title: 'Durazno - Encuentra tu mentor sin charlatanes',
  ogTitle: 'Durazno - Mentorship Discovery Platform',
  description: 'Conecta con mentores verificados de forma anónima y gratuita. Sin marketplace. Sin feeds. Solo conexiones que importan.',
  ogDescription: 'Conecta con mentores verificados de forma anónima y gratuita. Sin marketplace. Sin feeds. Solo conexiones que importan.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
