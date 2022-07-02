<script setup lang="ts">
const { isScrolling, y } = useScroll(window)
const { isMdAndLarger } = useTailwindBreakpoints()

const showScrollIcon = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

watch(isScrolling, (value) => {
  if (value) {
    clearTimeout(timer)
    showScrollIcon.value = false
  }
  else if (y.value === 0) {
    timer = setTimeout(() => {
      showScrollIcon.value = true
    }, 3000)
  }
}, { immediate: true })
</script>

<template>
  <Transition>
    <div v-if="showScrollIcon && isMdAndLarger" class="z-100 fixed bottom-10 left-50% translate-x--50%">
      <span class="block relative h-3.25rem w-2rem rounded-1rem border border-.22rem border-white">
        <span
          class="animate-dot block absolute left-50% h-.5rem w-.5rem top-.6rem ml--.25rem rounded-full backface-hidden bg-white"
        />
      </span>
    </div>
  </Transition>
</template>
