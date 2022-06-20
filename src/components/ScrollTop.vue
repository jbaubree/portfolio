<script setup lang="ts">
const { scrollToTop } = useScreen()

const footer = ref()
let footerShowHeight = $ref(0)
let scroll = $ref(scrollY)

window.addEventListener('scroll', () => {
  scroll = scrollY
  footerShowHeight = footer.value ? window.innerHeight - footer.value.getBoundingClientRect().top : 0
})

onMounted(() => {
  footer.value = document.getElementById('footer')
})
</script>

<template>
  <Transition>
    <div v-if="scroll > 100">
      {{ footerShowHeight }}
      <div
        class="z-100 fixed right-1.5rem bottom-1.5rem flex items-center justify-center transition-transform"
        :style="footerShowHeight > 0 ? `transform: translateY(${-footerShowHeight}px)` : 'transform: translateY(0)'"
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
