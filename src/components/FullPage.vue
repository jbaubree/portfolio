<script setup lang="ts">
const { background = 'bg-primary' } = defineProps<{
  background?: 'bg-light-200' | 'bg-primary'
}>()
const { isTallScreen } = useScreen()
</script>

<template>
  <div
    id="page"
    class="px-10 py-10 w-full flex items-center justify-center"
    :class="[{ 'md:h-100vh md:py-0': isTallScreen }, background]"
  >
    <slot />
  </div>
</template>
