<script setup lang="ts">
import { FadeInOut } from 'vue3-transitions'

const { isMdAndLarger } = useTailwindBreakpoints()
</script>

<template>
  <FadeInOut :duration="300" mode="out-in">
    <div v-if="fadeDark">
      <div :class="{ 'bg-primary': !isDark }" :style="isDark ? gradientStyle : ''">
        <div class="m-0 p-0 overflow-hidden">
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
      </div>
      <Footer />
    </div>
  </FadeInOut>
</template>
