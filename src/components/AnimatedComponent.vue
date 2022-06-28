<script setup lang="ts">
const { animationType = 'fade', threshold = 0.4, wrapperClass = '' } = defineProps<{
  animationType?: string
  threshold?: number
  wrapperClass?: string
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
    threshold,
  },
)

watch($$(animate), (value) => {
  if (value)
    emit('show')
})

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div ref="target">
    <Transition :name="animationType">
      <div v-appear="animate" class="animated-component" :class="wrapperClass">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}
</style>
