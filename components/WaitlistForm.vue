<template>
  <section id="register" class="py-24 bg-dark-primary relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-blue-500/10 rounded-full blur-3xl" />
    </div>

    <div class="max-w-2xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Empieza </span>
          <span class="gradient-text">ahora</span>
        </h2>
        <p class="text-gray-400 text-lg">
          Crea tu cuenta en segundos.
        </p>
      </div>

      <!-- Form card -->
      <div
        class="glass-strong rounded-3xl p-8 md:p-12 hover-glow"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="space-y-6">
          <!-- Role selection -->
          <div v-if="!isSuccess">
            <label class="block text-sm font-medium text-gray-300 mb-3">
              ¿Qué te describe mejor?
            </label>
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                @click="selectedRole = 'mentee'"
                :disabled="isLoading"
                :class="[
                  'p-4 rounded-xl border-2 transition-all duration-300 disabled:opacity-50',
                  selectedRole === 'mentee'
                    ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                    : 'border-gray-700 bg-transparent text-gray-400 hover:border-gray-600'
                ]"
              >
                <Icon name="heroicons:academic-cap-solid" class="w-8 h-8 mx-auto mb-2" />
                <div class="font-medium">Busco mentor</div>
                <div class="text-xs opacity-70">Quiero aprender</div>
              </button>

              <button
                type="button"
                @click="selectedRole = 'mentor'"
                :disabled="isLoading"
                :class="[
                  'p-4 rounded-xl border-2 transition-all duration-300 disabled:opacity-50',
                  selectedRole === 'mentor'
                    ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                    : 'border-gray-700 bg-transparent text-gray-400 hover:border-gray-600'
                ]"
              >
                <Icon name="heroicons:light-bulb-solid" class="w-8 h-8 mx-auto mb-2" />
                <div class="font-medium">Quiero mentorear</div>
                <div class="text-xs opacity-70">Quiero ayudar</div>
              </button>
            </div>
          </div>

          <!-- Google Sign In Button -->
          <div v-if="!isSuccess">
            <button
              @click="signInWithGoogle"
              :disabled="isLoading || !selectedRole"
              class="w-full py-4 px-6 text-lg font-semibold bg-white text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <template v-if="isLoading">
                <Icon name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
                Conectando...
              </template>
              <template v-else>
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuar con Google
              </template>
            </button>
            <p v-if="!selectedRole" class="text-gray-500 text-sm text-center mt-2">
              Primero selecciona si buscas mentor o quieres mentorear
            </p>
          </div>

          <!-- Error message -->
          <p v-if="error" class="text-red-400 text-sm text-center">
            {{ error }}
          </p>

          <!-- Success message -->
          <div v-if="isSuccess" class="text-center py-8">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
              <Icon name="heroicons:check-circle-solid" class="w-12 h-12 text-green-400" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">¡Bienvenido a Durazno!</h3>
            <p class="text-gray-400 mb-4">
              Tu cuenta ha sido creada como <span class="text-purple-400 font-medium">{{ selectedRole === 'mentor' ? 'Mentor' : 'Mentee' }}</span>.
            </p>
            <p class="text-gray-500 text-sm">
              Te notificaremos cuando la plataforma esté lista para explorar.
            </p>
          </div>
        </div>
      </div>

      <!-- Trust indicators -->
      <div
        class="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div class="flex items-center gap-2">
          <Icon name="heroicons:lock-closed-solid" class="w-4 h-4" />
          <span>Sin contraseñas</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:shield-check-solid" class="w-4 h-4" />
          <span>Datos seguros</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:heart-solid" class="w-4 h-4" />
          <span>100% gratis</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const selectedRole = ref<'mentor' | 'mentee' | ''>('')
const isLoading = ref(false)
const isSuccess = ref(false)
const error = ref('')

const signInWithGoogle = async () => {
  if (!selectedRole.value) return

  isLoading.value = true
  error.value = ''

  try {
    // Store the selected role in localStorage so we can retrieve it after OAuth redirect
    localStorage.setItem('durazno_pending_role', selectedRole.value)

    // Redirect to Google OAuth
    const clientId = config.public.googleClientId
    const redirectUri = encodeURIComponent(config.public.googleRedirectUri || window.location.origin + '/auth/callback')
    const scope = encodeURIComponent('email profile')
    const state = encodeURIComponent(selectedRole.value)

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}&access_type=offline&prompt=consent`

    window.location.href = googleAuthUrl
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Error al conectar con Google. Intenta de nuevo.'
    isLoading.value = false
  }
}
</script>
