// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  // Static site generation
  ssr: true,
  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Durazno - Encuentra tu mentor',
      meta: [
        { name: 'description', content: 'Plataforma de descubrimiento de mentores. Sin charlatanes. Sin ego.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Durazno - Encuentra tu mentor' },
        { property: 'og:description', content: 'Conecta con mentores verificados de forma anónima y gratuita.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ],
      htmlAttrs: {
        lang: 'es',
        class: 'dark'
      },
      bodyAttrs: {
        class: 'bg-[#0a0a0f] text-white antialiased'
      }
    }
  },

  runtimeConfig: {
    public: {
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      googleRedirectUri: process.env.NUXT_PUBLIC_GOOGLE_REDIRECT_URI || '',
      apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT || ''
    }
  }
})
