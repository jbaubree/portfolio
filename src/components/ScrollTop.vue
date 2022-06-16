<script setup lang="ts">
let scroll = $ref(0)

window.addEventListener('scroll', () => {
  scroll = scrollY
})

const scrollToTop = () => {
  (document.querySelector('#app') as HTMLElement).scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <Transition>
    <div v-if="scroll > 100">
      <div
        class="z-100 fixed bottom-1.5rem right-1.5rem flex items-center justify-center"
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
