<script setup lang="ts">
import profile from '~/assets/images/profile.png'
</script>

<template>
  <div class="flex items-center justify-between mb-40">
    <div class="flex flex-col gap-10 mr-4">
      <span class="text-1.25rem leading-none">Travail avec passion</span>
      <span class="text-17.5 font-bold leading-20">Développement & intégration de web applications</span>
      <Socials />
    </div>
    <Logo size="lg" icon="cube" />
  </div>
  <div class="relative">
    <div class="absolute top-0 left--120">
      <Logo size="lg" icon="arrow-right" />
    </div>
    <div class="relative bg-secondary pl-325px pr-24 py-29 rounded-12 flex overflow-hidden">
      <img :src="profile" alt="profile-picture" width="450" class="absolute bottom--30 left--20" loading="lazy">
      <div class="flex flex-col gap-1.5rem">
        <span class="text-1.25rem">Développeur front-end</span>
        <p class="text-17.5 leading-20 font-bold">
          Bonjour, je m'appelle Jean-Baptiste AUBRÉE
        </p>
        <p>
          Passionné par le développement depuis mon plus jeune âge, je travaille en tant que développeur front-end depuis maintenance 5 ans. <br>
          Mon langage de prédilection: <span class="font-semibold">VueJS</span>.
        </p>
      </div>
    </div>
  </div>
</template>
