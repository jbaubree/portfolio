<script setup lang="ts">
const { threshold = 0.4, wrapperClass = '' } = defineProps<{
  threshold?: number
  wrapperClass?: string
}>()
const emit = defineEmits<{
  (eventName: 'show'): void
  (eventName: 'hide'): void
}>()

const target = ref()
const animate = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting
  },
  {
    threshold,
  },
)

watch(animate, (value) => {
  if (value)
    emit('show')
})

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div ref="target">
    <Transition name="fade">
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
