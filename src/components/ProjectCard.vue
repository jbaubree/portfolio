<script setup lang="ts">
const props = defineProps<{
  image: string
  text: string
  link: string
}>()
</script>

<template>
  <div class="max-w-250px lg:max-w-300px xl:max-w-350px rounded-8 overflow-hidden group relative">
    <img
      class="w-full h-full object-cover"
      :src="props.image"
      :alt="imageNameFromPath(props.image)"
    >
    <a
      :href="props.link"
      target="_blank"
      class="flex items-center justify-center"
      cursor="pointer"
      opacity="0"
      group-hover="opacity-100"
      bg="dark-900 opacity-50"
      transition="opacity"
      absolute
      h-full
      w-full
      font="semibold"
      top="0"
      left="0"
      p="8"
    >
      <Text class="text-center">
        {{ props.text }}
      </Text>
    </a>
  </div>
</template>
