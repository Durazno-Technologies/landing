<template>
  <div class="min-h-screen bg-dark-primary text-white font-sans antialiased">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es',
    class: 'dark'
  },
  bodyAttrs: {
    class: 'bg-dark-primary'
  }
})
</script>

<style>
@import '~/assets/css/main.css';
</style>
