<script setup lang="ts">
import { FadeInOut } from 'vue3-transitions'

const { isMdAndLarger } = useTailwindBreakpoints()
</script>

<template>
  <FadeInOut :duration="300" mode="out-in">
    <div style="cursor: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' ...') 16 16, pointer;">
      <div v-if="fadeDark" class="m-0 p-0 overflow-hidden" :class="{ 'bg-primary': !isDark }" :style="isDark ? gradientStyle : ''">
        <Header />
        <div
          class="transition-all bg-transparent"
          :style="`margin-top: ${isMdAndLarger ? '0px' : '20px'};`"
        >
          <SectionHero />
          <SectionProfile />
          <SectionServices />
          <SectionProjects />
          <SectionStack />
          <SectionContact />
          <ScrollTop />
          <ScrollMouse />
          <Notification />
        </div>
      </div>
      <Footer />
    </div>
  </FadeInOut>
</template>
