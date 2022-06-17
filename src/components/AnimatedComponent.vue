<script setup lang="ts">
const { animationType = 'fade' } = defineProps<{
  animationType?: string
}>()
const emit = defineEmits<{
  (eventName: 'show'): void
  (eventName: 'hide'): void
}>()

const target = ref()
let animate = $ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    animate = entry.isIntersecting
  },
  {
    threshold: 0.5,
  },
)

watch($$(animate), (value) => {
  if (value) {
    emit('show')
    observer.disconnect()
  }
}, { immediate: true })

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div ref="target">
    <Transition :name="animationType">
      <div v-appear="animate" class="animated-component">
        <slot />
      </div>
    </Transition>
  </div>
</template>
