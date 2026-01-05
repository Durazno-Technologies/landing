<template>
  <section class="py-24 bg-dark-secondary relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">El problema con </span>
          <span class="gradient-text">encontrar mentores</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          LinkedIn y otras redes profesionales fallan en conectar personas que realmente quieren ayudar con quienes necesitan guía.
        </p>
      </div>

      <!-- Problem cards grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Card 1 -->
        <div
          class="glass-strong rounded-2xl p-8 hover-glow group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <Icon name="heroicons:building-office-2" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">LinkedIn falla en mentoría</h3>
              <p class="text-gray-400">
                Está diseñado para hiring y autopromoción, no para transferir conocimiento genuino entre personas.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="glass-strong rounded-2xl p-8 hover-glow group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
              <Icon name="heroicons:question-mark-circle" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Síndrome del impostor</h3>
              <p class="text-gray-400">
                Los juniors no saben en quién confiar. Perfiles llamativos no significan buenos mentores.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="glass-strong rounded-2xl p-8 hover-glow group"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <Icon name="heroicons:magnifying-glass" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Fricción para encontrar mentees</h3>
              <p class="text-gray-400">
                Hay expertos con ganas de compartir su experiencia, pero no encuentran a quién.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="glass-strong rounded-2xl p-8 hover-glow group"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
              <Icon name="heroicons:currency-dollar" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Charlatanes en todas partes</h3>
              <p class="text-gray-400">
                Plataformas de mentoría pagada atraen vendedores de humo. Y si no funciona, ya perdiste tu dinero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
