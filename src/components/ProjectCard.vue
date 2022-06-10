<script setup lang="ts">
const props = defineProps<{
  image: string
  text: string
}>()
</script>

<template>
  <div class="max-w-350px rounded-8 overflow-hidden">
    <img
      class="w-full h-full object-cover"
      :src="props.image"
      :alt="imageNameFromPath(props.image)"
    >
  </div>
</template>
