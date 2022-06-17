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

const show = $ref(false)
let isHoverEnabled = $ref(false)

watch($$(show), (value) => {
  if (value) {
    setTimeout(() => {
      isHoverEnabled = true
    }, 1000)
  }
})
</script>

<template>
  <FullPage class="relative flex flex-col items-start gap-8">
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
              'animate-delay-.15s': index === 2,
              'animate-delay-.3s': index === 4,
              'animate-delay-.45s': index === 6,
              'animate-delay-.6s': index === 8,
              'animate-delay-.75s': index === 1,
              'animate-delay-.9s': index === 3,
              'animate-delay-1.05s': index === 5,
              'animate-delay-1.2s': index === 7,
              'animate-delay-1.35s': index === 9,
            }"
          >
            <span
              class="text-13 leading-11 font-bold uppercase overflow-hidden"
              lg="text-17 leading-15"
              xl="text-20 leading-18"
            >
              {{ stackItem.name }}
            </span>
            <div
              class="i-fa-link h-2rem w-2rem ml-0.5rem invisible transition-opacity"
              :class="{ 'group-hover:visible': isHoverEnabled }"
            />
          </a>
        </div>
      </AnimatedComponent>
    </Container>
  </FullPage>
</template>
