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
    threshold: 1,
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
    <transition :name="animationType">
      <div v-appear="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.9);
}
</style>
