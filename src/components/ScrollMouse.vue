<script setup lang="ts">
const { pages } = useScreen()
const { isScrolling, y } = useScroll(window)
const { isMdAndLarger } = useTailwindBreakpoints()

let showScrollIcon = $ref(false)

let timer: ReturnType<typeof setTimeout> | undefined

watch(isScrolling, (value) => {
  if (value) {
    clearTimeout(timer)
    showScrollIcon = false
  }
  else if (pages.value.find(page => page.offsetTop === y.value)) {
    timer = setTimeout(() => {
      showScrollIcon = true
    }, 3000)
  }
}, { immediate: true })

const isLightMouse = $computed(() => {
  return pages.value.find(page => page.offsetTop === y.value)?.className.includes('bg-primary')
})
</script>

<template>
  <Transition>
    <div v-if="showScrollIcon && isMdAndLarger" class="fixed bottom-10 left-50% translate-x--50%">
      <span
        class="block relative h-3.25rem w-2rem rounded-1rem border border-.22rem"
        :class="isLightMouse ? 'border-white' : 'border-secondary'"
      >
        <span
          class="animate-dot block absolute left-50% h-.5rem w-.5rem top-.6rem ml--.25rem rounded-full backface-hidden"
          :class="isLightMouse ? 'bg-white' : 'bg-secondary'"
        />
      </span>
    </div>
  </Transition>
</template>
