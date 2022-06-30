<script setup lang="ts">
const { scrollToTop } = useScreen()

const footer = ref()
const footerShowHeight = ref(0)
const scroll = ref(scrollY)

window.addEventListener('scroll', () => {
  scroll.value = scrollY
  footerShowHeight.value = footer.value ? window.innerHeight - footer.value.getBoundingClientRect().top : 0
})

onMounted(() => {
  footer.value = document.getElementById('footer')
})
</script>

<template>
  <Transition>
    <div v-if="scroll > 100">
      <div
        class="z-100 fixed right-1.5rem bottom-1.5rem flex items-center justify-center"
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
