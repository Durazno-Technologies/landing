<template>
  <div class="min-h-screen gradient-bg flex items-center justify-center">
    <div class="text-center">
      <div v-if="isLoading" class="space-y-4">
        <Icon name="heroicons:arrow-path" class="w-12 h-12 text-purple-400 animate-spin mx-auto" />
        <p class="text-gray-400 text-lg">Verificando tu cuenta...</p>
      </div>

      <div v-else-if="error" class="space-y-4">
        <div class="w-20 h-20 mx-auto rounded-full bg-red-500/20 flex items-center justify-center">
          <Icon name="heroicons:x-circle-solid" class="w-12 h-12 text-red-400" />
        </div>
        <h2 class="text-2xl font-bold text-white">Error de autenticación</h2>
        <p class="text-gray-400">{{ error }}</p>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 mt-4 text-white bg-gradient-to-r from-orange-400 to-purple-500 rounded-xl hover:opacity-90 transition-opacity"
        >
          <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          Volver al inicio
        </NuxtLink>
      </div>

      <div v-else class="space-y-4">
        <div class="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
          <Icon name="heroicons:check-circle-solid" class="w-12 h-12 text-green-400" />
        </div>
        <h2 class="text-2xl font-bold text-white">{{ isNewUser ? '¡Cuenta creada!' : '¡Bienvenido de vuelta!' }}</h2>
        <p class="text-gray-400">Redirigiendo...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const isLoading = ref(true)
const error = ref('')
const isNewUser = ref(false)

onMounted(async () => {
  const code = route.query.code as string
  const state = route.query.state as string
  const errorParam = route.query.error as string

  if (errorParam) {
    error.value = 'Autenticación cancelada o fallida.'
    isLoading.value = false
    return
  }

  if (!code) {
    error.value = 'No se recibió código de autorización.'
    isLoading.value = false
    return
  }

  try {
    const role = state || localStorage.getItem('durazno_pending_role') || 'mentee'

    const response = await fetch(`${config.public.apiEndpoint}/auth-callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        role,
        redirectUri: config.public.googleRedirectUri || window.location.origin + '/auth/callback'
      })
    })

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || 'Error al crear la cuenta')
    }

    const data = await response.json()

    localStorage.removeItem('durazno_pending_role')
    isNewUser.value = data.isNewUser
    isLoading.value = false

    // If new user, store token temporarily and redirect to dashboard
    if (data.isNewUser && data.apiToken) {
      // Store in sessionStorage (cleared when browser closes, more secure than localStorage)
      sessionStorage.setItem('durazno_new_token', data.apiToken)
      sessionStorage.setItem('durazno_token_expires', data.tokenExpiresAt)
      sessionStorage.setItem('durazno_user_email', data.email)
      sessionStorage.setItem('durazno_user_role', data.role)

      setTimeout(() => {
        navigateTo('/dashboard')
      }, 1500)
    } else {
      // Existing user - redirect to dashboard without token display
      sessionStorage.setItem('durazno_user_email', data.email)
      sessionStorage.setItem('durazno_user_role', data.role)

      setTimeout(() => {
        navigateTo('/dashboard?returning=true')
      }, 1500)
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Error desconocido al procesar la autenticación.'
    isLoading.value = false
  }
})
</script>
