<script setup lang="ts">
import { Icosahedron } from 'troisjs'

const stack = [
  {
    name: 'Vue 3',
    link: 'https://vuejs.org/',
  },
  {
    name: 'Vite',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'VueUse',
    link: 'https://vueuse.org/',
  },
  {
    name: 'Pinia',
    link: 'https://pinia.vuejs.org/',
  },
  {
    name: 'UnoCSS',
    link: 'https://github.com/unocss/unocss',
  },
  {
    name: 'WindiCSS',
    link: 'https://windicss.org/',
  },
  {
    name: 'Vitest',
    link: 'https://vitest.dev/',
  },
  {
    name: 'Cypress',
    link: 'https://www.cypress.io/',
  },
  {
    name: 'Eslint',
    link: 'https://eslint.org/',
  },
]

const show = ref(false)
const isHoverEnabled = ref(false)
const { isMdAndLarger } = useTailwindBreakpoints()
watch(show, (value) => {
  if (value) {
    setTimeout(() => {
      isHoverEnabled.value = true
    }, 1000)
  }
})
</script>

<template>
  <FullPage class="relative flex flex-col items-center gap-8">
    <Container class="flex items-center md:items-start flex-col gap-8">
      <div class="absolute top--20 right--20 hidden lg:block">
        <Logo size="lg" :icon="Icosahedron" />
      </div>
      <Logo />
      <Title>
        {{ $t('stack.stack') }}
      </Title>
      <Text>
        {{ $t('stack.text') }}
      </Text>
      <AnimatedComponent @show="show = true">
        <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10 gap-y-1px">
          <a
            v-for="stackItem, index in stack"
            :key="index"
            :href="stackItem.link"
            target="_blank"
            class="opacity-50 transition-opacity cursor-pointer flex items-center group"
            :class="{
              'hover:opacity-100': isHoverEnabled,
              'animate-signal': show,
              'animate-delay-0': index === 0,
              'animate-delay-.15s': isMdAndLarger ? index === 2 : index === 1,
              'animate-delay-.3s': isMdAndLarger ? index === 4 : index === 2,
              'animate-delay-.45s': isMdAndLarger ? index === 6 : index === 3,
              'animate-delay-.6s': isMdAndLarger ? index === 8 : index === 4,
              'animate-delay-.75s': isMdAndLarger ? index === 1 : index === 5,
              'animate-delay-.9s': isMdAndLarger ? index === 3 : index === 6,
              'animate-delay-1.05s': isMdAndLarger ? index === 5 : index === 7,
              'animate-delay-1.2s': isMdAndLarger ? index === 7 : index === 8,
              'animate-delay-1.35s': isMdAndLarger ? index === 9 : index === 9,
            }"
          >
            <span
              class="font-bold uppercase overflow-hidden text-size-[clamp(3.25rem,2rem+3vw,5rem)] leading-[clamp(2.75rem,2rem+3vw,4.5rem)]"
            >
              {{ stackItem.name }}
            </span>
            <div
              class="hidden lg:block i-fa-link h-2rem w-2rem ml-0.5rem invisible transition-opacity"
              :class="{ 'group-hover:visible': isHoverEnabled }"
            />
          </a>
        </div>
      </AnimatedComponent>
    </Container>
  </FullPage>
</template>
