<script setup lang="ts">
const { isTallScreen } = useScreen()
</script>

<template>
  <div
    class="page px-10 py-10 w-full flex items-center justify-center"
    :class="{ 'md:h-100vh md:py-0': isTallScreen }"
  >
    <slot />
  </div>
</template>
