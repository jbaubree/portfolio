<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
  tags: string[]
}>()
</script>

<template>
  <div class="bg-secondary p-12 rounded-12 flex flex-col gap-8 w-21rem">
    <span class="font-bold text-3rem leading-none">{{ props.title }}</span>
    <Text>{{ props.text }}</Text>
    <div class="flex gap-4 flex-wrap">
      <div
        v-for="tag in props.tags"
        :key="tag"
        class="text-primary whitespace-nowrap bg-white px-3 py-1.5 rounded-3 font-bold"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
