<script setup lang="ts">
import { Box, Cone, Icosahedron, Tetrahedron, Torus } from 'troisjs'
import ServiceCard from './ServiceCard.vue'
import digitsole from '~/assets/images/digitsole.webp'
import portfolio from '~/assets/images/portfolio.webp'
import profile from '~/assets/images/profile.webp'
import vite from '~/assets/images/vite.svg'

const { t } = useI18n()
const { isTallScreen } = useScreen()

const services = $computed(() => [
  {
    title: t('services.titles.web-app'),
    text: t('services.texts.web-app'),
    tags: ['Vue 3', 'Typescript', 'Vite', 'UnoCSS'],
  },
  {
    title: t('services.titles.ui/ux-design'),
    text: t('services.texts.ui/ux-design'),
    tags: ['Adobe XD', 'Illustrator', 'Photoshop'],
  },
])

const projects = $computed(() => [
  {
    image: portfolio,
    text: t('projects.texts.portfolio'),
    link: 'https://github.com/jbaubree/portfolio/',
  },
  {
    image: digitsole,
    text: t('projects.texts.digitsole'),
    link: 'https://app.digitsolepro.com/',
  },
  {
    image: vite,
    text: t('projects.texts.vite'),
    link: 'https://github.com/jbaubree?tab=repositories&q=vite',
  },
])

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
</script>

<template>
  <Header />
  <FullPage class="py-20">
    <Container>
      <div class="flex items-center justify-between gap-8">
        <div class="flex flex-col gap-8 sm:gap-10">
          <Text>{{ $t('header.title') }}</Text>
          <Title>{{ $t('header.subtitle') }}</Title>
          <Socials />
        </div>
        <Logo size="lg" :icon="Box" />
      </div>
    </Container>
  </FullPage>

  <FullPage>
    <Container>
      <div class="relative">
        <template v-if="isTallScreen">
          <div class="absolute top--60 left--20">
            <Logo size="lg" :icon="Cone" />
          </div>
          <div class="absolute bottom--60 right--20">
            <Logo size="lg" :icon="Cone" />
          </div>
        </template>
        <div class="relative bg-secondary md:pl-325px px-13 py-15 md:px-24 md:py-29 rounded-12 flex overflow-hidden">
          <img
            :src="profile"
            :alt="$t('images.profile-picture')"
            fetchpriority="high"
            width="450"
            height="600"
            class="absolute bottom--30 left--20 hidden md-block"
            style="filter: sepia(35%) hue-rotate(195deg) saturate(500%);"
          >
          <div class="flex flex-col gap-8">
            <Text>{{ $t('profile.title') }}</Text>
            <Title>
              {{ $t('profile.subtitle') }}
            </Title>
            <Text v-html="$t('profile.text')" />
          </div>
        </div>
      </div>
    </Container>
  </FullPage>

  <FullPage>
    <Container>
      <div class="flex items-center justify-center lg:justify-between gap-8">
        <div class="flex flex-col items-center md:items-start gap-8">
          <Logo />
          <Title>{{ $t('services.service', 2) }}</Title>
          <Text>
            {{ $t('services.text') }}
          </Text>
          <div class="flex flex-col sm:flex-row gap-8 items-start">
            <ServiceCard
              v-for="service, index in services"
              :key="index"
              :title="service.title"
              :text="service.text"
              :tags="service.tags"
            />
          </div>
        </div>
        <Logo size="lg" :icon="Tetrahedron" class="!hidden !lg:flex" />
      </div>
    </Container>
  </FullPage>

  <FullPage class="bg-light-200">
    <Container class="flex items-center md:items-start flex-col gap-8">
      <Logo variant="primary" />
      <Title class="text-primary">
        {{ $t('projects.project', 2) }}
      </Title>
      <Text class="text-gray-700">
        {{ $t('projects.text') }}
      </Text>
      <div class="w-full flex gap-8 flex-wrap justify-center sm:justify-start z-1">
        <ProjectCard
          v-for="project, index in projects"
          :key="index"
          :image="project.image"
          :text="project.text"
          :link="project.link"
        />
      </div>
    </Container>
  </FullPage>

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
      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10 gap-y-1px">
        <a
          v-for="stackItem, index in stack"
          :key="index"
          :href="stackItem.link"
          target="_blank"
          class="opacity-50 hover:opacity-100 transition-opacity cursor-pointer flex items-center group"
        >
          <span
            class="text-13 leading-11 font-bold uppercase overflow-hidden"
            lg="text-17 leading-15"
            xl="text-20 leading-18"
          >
            {{ stackItem.name }}
          </span>
          <div
            class="i-fa-link h-2rem w-2rem ml-0.5rem invisible group-hover:visible transition-opacity"
          />
        </a>
      </div>
    </Container>
  </FullPage>

  <FullPage class="relative bg-light-200">
    <Container class="flex flex-col items-center md:items-start md:flex-row justify-between items-center w-full gap-8">
      <div class="flex flex-col items-center md:items-start gap-8 z-1">
        <Logo variant="primary" />
        <Title class="text-primary">
          {{ $t('contact.contact') }}
        </Title>
        <Text class="text-gray-700">
          {{ $t('contact.phone') }}: <a class="font-semibold" href="tel:+33760269499">+33 7 60 26 94 99</a>
          <br>
          {{ $t('contact.email') }}: <a class="font-semibold" href="mailto:jb.aubree@protonmail.com">jb.aubree@protonmail.com</a>
        </Text>
      </div>
      <div class="bg-white rounded-12 p-12 text-gray-700 w-full md:w-auto shadow-2xl shadow-primary/30">
        <ContactForm />
      </div>
      <div class="absolute left--20 bottom-0">
        <Logo size="lg" :icon="Torus" />
      </div>
    </Container>
  </FullPage>
  <Footer />
</template>
