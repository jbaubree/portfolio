<script setup lang="ts">
const { isMdAndLarger } = useTailwindBreakpoints()
const { headerSize } = useScreen()
</script>

<template>
  <Header />
  <div :style="`margin-top: ${isMdAndLarger ? '0px' : `${headerSize?.height}px`}`">
    <SectionHero />
    <SectionProfile />
    <SectionServices />
    <SectionProjects />
    <SectionStack />
    <SectionContact />
    <Footer />
    <ScrollTop />
    <ScrollMouse />
    <Notification />
  </div>
</template>
