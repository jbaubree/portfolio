<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
  tags: string[]
}>()
</script>

<template>
  <div class="bg-secondary p-10 rounded-10 flex flex-col gap-8 max-w-18rem">
    <span class="font-bold text-3rem leading-none">{{ props.title }}</span>
    <Text>{{ props.text }}</Text>
    <div class="flex gap-2 flex-wrap">
      <div
        v-for="tag in props.tags"
        :key="tag"
        class="text-primary whitespace-nowrap bg-white px-2 py-1 rounded-3 font-bold"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
