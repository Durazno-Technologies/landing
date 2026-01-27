<template>
  <footer class="py-12 bg-dark-secondary border-t border-gray-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold gradient-text mb-1">Durazno</h3>
          <p class="text-gray-400 text-sm">Mentorship Discovery Platform</p>
        </div>

        <!-- Tagline -->
        <div class="text-center">
          <p class="text-gray-400">
            Made with
            <span class="text-red-400">♥</span>
            en 🇲🇽 para el mundo
          </p>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6 text-gray-400">
          <a
            href="https://mentor.durazno.org"
            target="_blank"
            class="hover:text-white transition-colors flex items-center gap-2"
          >
            <Icon name="heroicons:globe-alt" class="w-5 h-5" />
            mentor.durazno.org
          </a>
        </div>
      </div>

      <!-- Legal links -->
      <div class="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-white text-sm transition-colors">
          Política de Privacidad
        </NuxtLink>
        <NuxtLink to="/terms-of-service" class="text-gray-400 hover:text-white text-sm transition-colors">
          Términos de Servicio
        </NuxtLink>
      </div>

      <!-- Copyright -->
      <div class="mt-4 text-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Durazno. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
