<script setup lang="ts">
const { isTallScreen, pages } = useScreen()
const { isScrolling, y } = useScroll(window)
const { isMdAndLarger } = useTailwindBreakpoints()

let showScrollIcon = $ref(false)

let timer: ReturnType<typeof setTimeout> | undefined

watch(isScrolling, (value) => {
  if (value) {
    clearTimeout(timer)
    showScrollIcon = false
  }
  else if (y.value < 100 || pages.value.find(page => page.offsetTop === y.value)) {
    timer = setTimeout(() => {
      showScrollIcon = true
    }, 3000)
  }
}, { immediate: true })

const isBlueMouse = computed(() => {
  return y.value === (pages.value[3]?.offsetTop || pages.value[5]?.offsetTop)
})
</script>

<template>
  <div
    class="page px-10 py-10 w-full flex items-center justify-center"
    :class="{ 'md:h-100vh md:py-0': isTallScreen }"
  >
    <slot />
    <div v-if="showScrollIcon && isMdAndLarger" class="fixed bottom-10 left-50% translate-x--50%">
      <span
        class="block relative h-3.25rem w-2rem rounded-1rem border border-.22rem"
        :class="isBlueMouse ? 'border-secondary' : 'border-white'"
      >
        <span
          class="animate-dot block absolute left-50% h-.5rem w-.5rem top-.6rem ml--.25rem rounded-full backface-hidden"
          :class="isBlueMouse ? 'bg-secondary' : 'bg-white'"
        />
      </span>
    </div>
  </div>
</template>
