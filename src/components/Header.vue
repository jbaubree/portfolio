<script setup lang="ts">
import cursor from '~/assets/images/cursor.svg'

const { isScrolling, y, directions } = useScroll(window)
const { headerSize, pages } = useScreen()
const { scrollToTop } = useScreen()

const showHeader = ref(false)
const headerHeight = computed(() => headerSize.value?.height || 0)

watch(directions, (value) => {
  if (value.bottom && y.value > 0)
    showHeader.value = false
  if (value.top)
    showHeader.value = true
})

watch(isScrolling, (value) => {
  if (y.value === 0)
    showHeader.value = true
  if (!value && y.value !== 0 && typeof pages.value.find(page => page.offsetTop === y.value) !== 'undefined')
    showHeader.value = false
}, { immediate: true })
</script>

<template>
  <div
    id="header"
    class="w-full z-5 px-10 fixed flex justify-center bg-opacity-75 rounded-b-5 backdrop-blur-6 transition-transform duration-500"
    dark="bg-transparent"
    :class="y === 0 ? 'bg-transparent' : 'bg-#031994'"
    :style="showHeader ? 'transform: translateY(0)' : `transform: translateY(${-headerHeight}px)`"
  >
    <Container
      class="flex items-center justify-center sm:justify-between py-6"
    >
      <Logo size="sm" class="cursor-pointer" @click="scrollToTop" />
      <Nav>
        <div
          class="sm:hidden block rounded-full min-w-6 min-h-6 flex items-center justify-center"
          style="cursor: url(cursor) 35 35, pointer;"
          :style="`${gradientStyle}; cursor: url(${cursor}) 35 35, pointer`"
          @click="toggleDark()"
        />
      </Nav>
      <div
        class="sm:flex hidden rounded-full w-10 h-10 items-center justify-center"
        style="cursor: url(cursor) 35 35, pointer;"
        :style="`${gradientStyle}; cursor: url(${cursor}) 35 35, pointer`"
        @click="toggleDark()"
      />
    </Container>
  </div>
</template>
