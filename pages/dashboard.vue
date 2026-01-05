<template>
  <div class="min-h-screen gradient-bg">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="flex items-center justify-between mb-12">
        <NuxtLink to="/" class="flex items-center gap-2">
          <h1 class="text-2xl font-bold gradient-text">Durazno</h1>
        </NuxtLink>
        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-sm">{{ userEmail }}</span>
          <span
            :class="[
              'px-3 py-1 rounded-full text-xs font-medium',
              userRole === 'mentor'
                ? 'bg-purple-500/20 text-purple-400'
                : 'bg-orange-500/20 text-orange-400'
            ]"
          >
            {{ userRole === 'mentor' ? 'Mentor' : 'Mentee' }}
          </span>
        </div>
      </div>

      <!-- New User: Show Token -->
      <div v-if="hasNewToken" class="space-y-8">
        <!-- Warning Banner -->
        <div class="glass-strong rounded-2xl p-6 border border-yellow-500/30 bg-yellow-500/5">
          <div class="flex items-start gap-4">
            <Icon name="heroicons:exclamation-triangle-solid" class="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 class="text-xl font-bold text-yellow-400 mb-2">Guarda tu API Token</h2>
              <p class="text-gray-300">
                Este es tu token de acceso a Durazno. <strong class="text-white">Solo se muestra una vez.</strong>
                Si no lo copias ahora, tendrás que generar uno nuevo.
              </p>
            </div>
          </div>
        </div>

        <!-- Token Display -->
        <div class="glass-strong rounded-2xl p-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-white">Tu API Token</h3>
            <span class="text-sm text-gray-500">Expira: {{ formatDate(tokenExpires) }}</span>
          </div>

          <div class="relative">
            <div class="bg-black/50 rounded-xl p-4 font-mono text-lg break-all border border-gray-700">
              <span class="text-purple-400">{{ apiToken }}</span>
            </div>
            <button
              @click="copyToken"
              class="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              :class="{ 'bg-green-500/20': copied }"
            >
              <Icon
                :name="copied ? 'heroicons:check-solid' : 'heroicons:clipboard-document-solid'"
                class="w-5 h-5"
                :class="copied ? 'text-green-400' : 'text-gray-400'"
              />
            </button>
          </div>

          <p v-if="copied" class="text-green-400 text-sm mt-2 text-center">Token copiado al portapapeles</p>
        </div>

        <!-- CLI Instructions -->
        <div class="glass-strong rounded-2xl p-8">
          <h3 class="text-xl font-bold text-white mb-6">Instala el CLI</h3>

          <div class="space-y-6">
            <!-- Step 1 -->
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">1</span>
              </div>
              <div class="flex-1">
                <p class="text-gray-300 mb-2">Instala el CLI de Durazno:</p>
                <div class="bg-black/50 rounded-lg p-3 font-mono text-sm">
                  <div><span class="text-gray-500">$</span><span class="text-green-400 ml-2">go install github.com/Durazno-Technologies/cli@latest</span></div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">2</span>
              </div>
              <div class="flex-1">
                <p class="text-gray-300 mb-2">Inicia sesión y entra al shell interactivo:</p>
                <div class="bg-black/50 rounded-lg p-3 font-mono text-sm space-y-1">
                  <div><span class="text-gray-500">$</span><span class="text-green-400 ml-2">durazno login</span></div>
                  <div><span class="text-gray-500">Token:</span><span class="text-purple-400 ml-2">dzn_••••••••</span></div>
                  <div><span class="text-green-400">durazno&gt;</span><span class="text-white ml-2">_</span></div>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">3</span>
              </div>
              <div class="flex-1">
                <p class="text-gray-300 mb-2">Usa los comandos dentro del shell:</p>
                <div class="bg-black/50 rounded-lg p-3 font-mono text-sm space-y-1">
                  <div><span class="text-green-400">durazno&gt;</span><span class="text-white ml-2">help</span></div>
                  <div><span class="text-green-400">durazno&gt;</span><span class="text-white ml-2">seek --skill golang</span></div>
                  <div><span class="text-green-400">durazno&gt;</span><span class="text-white ml-2">profile</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Coming Soon Notice -->
          <div class="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <div class="flex items-center gap-3">
              <Icon name="heroicons:clock-solid" class="w-5 h-5 text-blue-400" />
              <p class="text-blue-300 text-sm">
                <strong>CLI en desarrollo.</strong> Te notificaremos cuando esté disponible.
              </p>
            </div>
          </div>
        </div>

        <!-- Confirm Button -->
        <div class="text-center">
          <button
            @click="confirmTokenSaved"
            :disabled="!tokenConfirmed"
            class="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-purple-500 rounded-xl hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ya guardé mi token
          </button>
          <label class="flex items-center justify-center gap-2 mt-4 text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              v-model="tokenConfirmed"
              class="w-4 h-4 rounded border-gray-600 bg-transparent text-purple-500 focus:ring-purple-500"
            />
            <span class="text-sm">Confirmo que copié y guardé mi token de forma segura</span>
          </label>
        </div>
      </div>

      <!-- Returning User: No Token -->
      <div v-else class="space-y-8">
        <div class="glass-strong rounded-2xl p-8 text-center">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Icon name="heroicons:user-circle-solid" class="w-12 h-12 text-purple-400" />
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Bienvenido de vuelta</h2>
          <p class="text-gray-400 mb-6">
            Ya tienes una cuenta registrada. Usa tu token guardado para acceder al CLI.
          </p>

          <div class="bg-black/30 rounded-xl p-6 text-left max-w-md mx-auto">
            <p class="text-gray-300 text-sm mb-3">Inicia sesión con tu token:</p>
            <div class="bg-black/50 rounded-lg p-3 font-mono text-sm">
              <span class="text-gray-500">$</span>
              <span class="text-green-400 ml-2">durazno login</span>
            </div>
          </div>

          <div class="mt-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 max-w-md mx-auto">
            <p class="text-yellow-300 text-sm">
              <strong>¿Perdiste tu token?</strong> La funcionalidad para regenerar tokens estará disponible pronto.
            </p>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="heroicons:arrow-left" class="w-5 h-5" />
            Volver al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const apiToken = ref('')
const tokenExpires = ref('')
const userEmail = ref('')
const userRole = ref('')
const hasNewToken = ref(false)
const copied = ref(false)
const tokenConfirmed = ref(false)

onMounted(() => {
  // Check if we have a new token to display
  const newToken = sessionStorage.getItem('durazno_new_token')
  const expires = sessionStorage.getItem('durazno_token_expires')
  const email = sessionStorage.getItem('durazno_user_email')
  const role = sessionStorage.getItem('durazno_user_role')

  if (newToken && !route.query.returning) {
    apiToken.value = newToken
    tokenExpires.value = expires || ''
    hasNewToken.value = true
  }

  userEmail.value = email || ''
  userRole.value = role || ''

  // If no session data, redirect to home
  if (!email) {
    navigateTo('/')
  }
})

const copyToken = async () => {
  try {
    await navigator.clipboard.writeText(apiToken.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy token:', err)
  }
}

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const confirmTokenSaved = () => {
  // Clear the token from session storage
  sessionStorage.removeItem('durazno_new_token')
  sessionStorage.removeItem('durazno_token_expires')

  // Navigate to a thank you or next steps page
  navigateTo('/?welcome=true')
}

useHead({
  title: 'Dashboard - Durazno'
})
</script>
