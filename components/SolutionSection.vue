<template>
  <section class="py-24 bg-dark-primary relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Así es </span>
          <span class="gradient-text">Durazno</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Herramientas de búsqueda para que mentores y mentees se encuentren. Sin ruido.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <!-- Feature 1 -->
        <div
          class="text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center glow-purple">
            <Icon name="heroicons:eye-slash-solid" class="w-8 h-8 text-purple-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Anonimato + Badges Verificados</h3>
          <p class="text-gray-400">
            Permanece anónimo pero gana credibilidad a través de logros verificados y certificaciones.
          </p>
        </div>

        <!-- Feature 2 -->
        <div
          class="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center glow-peach">
            <Icon name="heroicons:clock-solid" class="w-8 h-8 text-orange-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Conexiones Efímeras</h3>
          <p class="text-gray-400">
            Explora → Chat → Si funciona → WhatsApp/Telegram/email. Sin hooks de retención.
          </p>
        </div>

        <!-- Feature 3 -->
        <div
          class="text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
            <Icon name="heroicons:gift-solid" class="w-8 h-8 text-green-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Gratis por Diseño</h3>
          <p class="text-gray-400">
            Elimina el riesgo de "mentor pagado = charlatán". Si no funciona, no perdiste nada.
          </p>
        </div>
      </div>

      <!-- What we're NOT building -->
      <div
        class="glass rounded-2xl p-8 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 class="text-xl font-bold text-white mb-6 text-center">Lo que NO estamos construyendo</h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-center gap-3 text-gray-400">
            <Icon name="heroicons:x-circle-solid" class="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>Una red social con feeds y likes</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400">
            <Icon name="heroicons:x-circle-solid" class="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>Un marketplace de sesiones pagadas</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400">
            <Icon name="heroicons:x-circle-solid" class="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>Un clon de LinkedIn con mejor UI</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400">
            <Icon name="heroicons:x-circle-solid" class="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>Un foro de comunidad genérico</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
