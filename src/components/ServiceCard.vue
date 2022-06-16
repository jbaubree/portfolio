<script setup lang="ts">
const { title, text, tags } = defineProps<{
  title: string
  text: string
  tags: string[]
}>()
</script>

<template>
  <div class="bg-secondary p-10 rounded-10 flex flex-col gap-8 max-w-18rem">
    <span class="text-1.75rem leading-none font-bold">
      {{ title }}
    </span>
    <Text>{{ text }}</Text>
    <div class="flex gap-2 flex-wrap">
      <div
        v-for="tag in tags"
        :key="tag"
        class="text-primary whitespace-nowrap bg-white px-2 py-1 rounded-3 font-bold"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
