<script setup lang="ts">
const props = defineProps<{
  image: string
  text: string
}>()
</script>

<template>
  <div class="min-w-380px min-h-380px w-380px h-380px rounded-8 overflow-hidden">
    <img
      class="w-full h-full object-cover"
      :src="props.image"
      :alt="props.image.split('/').at(-1)?.split('.').at(0)"
    >
  </div>
</template>
