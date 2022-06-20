<script setup lang="ts">
const { arrivedState } = useScroll(window)
const { scrollToTop, footerSize } = useScreen()

let scroll = $ref(scrollY)

window.addEventListener('scroll', () => {
  scroll = scrollY
})

const footerHeight = $computed(() => footerSize.value?.height || 0)

const isArrivedOnBottom = $computed(() => {
  return !!arrivedState.bottom
})
</script>

<template>
  <Transition>
    <div v-if="scroll > 100">
      <div
        class="z-100 fixed right-1.5rem bottom-1.5rem flex items-center justify-center transition-transform"
        :style="isArrivedOnBottom ? `transform: translateY(${-footerHeight}px)` : 'transform: translateY(0)'"
        bg="black"
        w="2.5rem"
        h="2.5rem"
        opacity="50"
        transition="opacity"
        hover="opacity-100"
        rounded="full"
        cursor="pointer"
        @click="scrollToTop()"
      >
        <div class="i-fa-angle-up" />
      </div>
    </div>
  </Transition>
</template>
