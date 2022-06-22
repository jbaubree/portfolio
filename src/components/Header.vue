<script setup lang="ts">
const { isScrolling, y, directions } = useScroll(window)
const { headerSize, pages } = useScreen()
const { scrollToTop } = useScreen()

let showHeader = $ref(false)
const headerHeight = $computed(() => headerSize.value?.height || 0)

watch(directions, (value) => {
  if (value.bottom && y.value > 0)
    showHeader = false
  if (value.top)
    showHeader = true
})

watch(isScrolling, (value) => {
  if (y.value === 0)
    showHeader = true
  if (!value && y.value !== 0 && typeof pages.value.find(page => page.offsetTop === y.value) !== 'undefined')
    showHeader = false
}, { immediate: true })
</script>

<template>
  <div
    id="header"
    class="w-full z-5 px-10 fixed flex justify-center bg-#031994 bg-opacity-70 rounded-b-5 backdrop-blur-6 transition-transform duration-500"
    :style="showHeader ? 'transform: translateY(0)' : `transform: translateY(${-headerHeight}px)`"
  >
    <Container
      class="flex items-center justify-center sm:justify-between py-6"
    >
      <Logo size="sm" class="cursor-pointer" @click="scrollToTop" />
      <Nav />
    </Container>
  </div>
</template>
