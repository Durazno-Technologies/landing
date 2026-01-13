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
  ogImage: 'https://durazno.org/og-image.png',
  ogUrl: 'https://durazno.org/',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://durazno.org/' }
  ]
})

// Track PageVisit only on landing page
onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).rdt) {
    ;(window as any).rdt('track', 'PageVisit')
  }
})
</script>
