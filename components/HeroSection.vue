<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg noise">
    <!-- Floating glassmorphism elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl float"
      />
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl float-delayed"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
      />
    </div>

    <!-- Floating badges -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      <div
        class="absolute top-32 left-20 glass rounded-2xl px-4 py-2 float"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:shield-check-solid" class="w-5 h-5 text-purple-400" />
          <span class="text-sm text-gray-300">100% Gratis</span>
        </div>
      </div>

      <div
        class="absolute top-48 right-24 glass rounded-2xl px-4 py-2 float-delayed"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:user-group-solid" class="w-5 h-5 text-blue-400" />
          <span class="text-sm text-gray-300">Mentores reales</span>
        </div>
      </div>

      <div
        class="absolute bottom-40 left-32 glass rounded-2xl px-4 py-2 float-delayed-2"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:eye-slash-solid" class="w-5 h-5 text-green-400" />
          <span class="text-sm text-gray-300">Sin fotos ni nombres</span>
        </div>
      </div>

      <div
        class="absolute top-72 left-40 glass rounded-2xl px-4 py-2 float"
        data-aos="fade-right"
        data-aos-delay="900"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:sparkles-solid" class="w-5 h-5 text-yellow-400" />
          <span class="text-sm text-gray-300">Sin algoritmos manipuladores</span>
        </div>
      </div>

      <div
        class="absolute bottom-32 right-28 glass rounded-2xl px-4 py-2 float-delayed"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:link-solid" class="w-5 h-5 text-orange-400" />
          <span class="text-sm text-gray-300">Conexión directa</span>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <!-- Logo/Brand -->
      <div data-aos="fade-down" data-aos-duration="1000">
        <h1 class="text-6xl md:text-8xl font-extrabold mb-2">
          <span class="gradient-text">Durazno</span>
        </h1>
        <p class="text-gray-400 text-lg tracking-widest uppercase mb-12">Mentorship Discovery</p>
      </div>

      <!-- Tagline -->
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Encuentra tu mentor.<br />
          <span class="text-gray-400">Sin charlatanes. Sin ego.</span>
        </h2>
      </div>

      <!-- Subtitle -->
      <p
        class="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Conecta con expertos verificados de forma anónima y gratuita.
        Sin marketplace. Sin feeds. Solo conexiones que importan.
      </p>

      <!-- CTA Button -->
      <div data-aos="fade-up" data-aos-delay="600">
        <button
          @click="scrollToRegister"
          class="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-purple-500 rounded-xl hover-glow transition-all duration-300 hover:scale-105"
        >
          <Icon name="heroicons:rocket-launch-solid" class="w-5 h-5" />
          Regístrate gratis
        </button>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <Icon name="heroicons:chevron-down" class="w-8 h-8 text-gray-500" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToRegister = () => {
  const element = document.getElementById('register')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
