<template>
  <section class="py-24 bg-dark-secondary relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

    <div class="max-w-5xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Cómo </span>
          <span class="gradient-text">funciona</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Simple. Rápido. Sin fricción.
        </p>
      </div>

      <!-- Steps timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-orange-500 to-blue-500 hidden md:block" />

        <!-- Step 1 -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12" data-aos="fade-up">
          <div class="flex-1 md:text-right md:pr-12 order-2 md:order-1">
            <h3 class="text-xl font-bold text-white mb-2">Crea tu perfil anónimo</h3>
            <p class="text-gray-400">Agrega tus skills y certificaciones. Nosotros las validamos.</p>
          </div>
          <div class="order-1 md:order-2 relative z-10">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-2xl font-bold text-white glow-purple">
              1
            </div>
          </div>
          <div class="flex-1 md:pl-12 order-3 hidden md:block" />
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div class="flex-1 md:pr-12 order-2 hidden md:block" />
          <div class="order-1 md:order-2 relative z-10">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl font-bold text-white glow-peach">
              2
            </div>
          </div>
          <div class="flex-1 md:pl-12 order-2 md:order-3">
            <h3 class="text-xl font-bold text-white mb-2">Explora y busca</h3>
            <p class="text-gray-400">Filtra por skills, intereses y disponibilidad. Tú decides.</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="200">
          <div class="flex-1 md:text-right md:pr-12 order-2 md:order-1">
            <h3 class="text-xl font-bold text-white mb-2">Chat efímero</h3>
            <p class="text-gray-400">Platiquen en un chat temporal dentro de la plataforma.</p>
          </div>
          <div class="order-1 md:order-2 relative z-10">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-2xl font-bold text-white">
              3
            </div>
          </div>
          <div class="flex-1 md:pl-12 order-3 hidden md:block" />
        </div>

        <!-- Step 4 (Final) -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6" data-aos="fade-up" data-aos-delay="300">
          <div class="flex-1 md:pr-12 order-2 hidden md:block" />
          <div class="order-1 md:order-2 relative z-10">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center glow-peach">
              <Icon name="heroicons:check-solid" class="w-8 h-8 text-white" />
            </div>
          </div>
          <div class="flex-1 md:pl-12 order-2 md:order-3">
            <h3 class="text-xl font-bold text-white mb-2">¡Listo!</h3>
            <p class="text-gray-400">Si funciona, intercambien WhatsApp, Telegram o email. Lo demás es cosa de ustedes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
