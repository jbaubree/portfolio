<script setup lang="ts">
const { background = 'bg-primary', animatedWrapperClass = '', animatedClass = '' } = defineProps<{
  background?: 'bg-light-200' | 'bg-primary'
  animatedClass?: string
  animatedWrapperClass?: string
}>()
const { isTallScreen } = useScreen()
</script>

<template>
  <div
    id="page"
    class="px-10 py-10 w-full flex items-center justify-center"
    dark="bg-transparent"
    :class="[{ 'md:h-100vh md:py-0': isTallScreen }, background]"
  >
    <AnimatedComponent :threshold="0.1" :class="animatedWrapperClass" :wrapper-class="animatedClass">
      <slot />
    </AnimatedComponent>
  </div>
</template>
