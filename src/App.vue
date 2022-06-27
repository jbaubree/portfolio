<script setup lang="ts">
import { FadeInOut } from 'vue3-transitions'

const { isMdAndLarger } = useTailwindBreakpoints()
const { headerSize } = useScreen()
</script>

<template>
  <FadeInOut :duration="300" mode="out-in">
    <div v-if="fadeDark.value">
      <Header />
      <div
        class="transition-all bg-transparent"
        :style="`margin-top: ${isMdAndLarger ? '0px' : `${headerSize?.height}px`}; ${gradientStyle}`"
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
      <Footer />
    </div>
  </FadeInOut>
</template>
