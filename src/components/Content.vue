<script setup lang="ts">
import { Box, Cone, Icosahedron, Tetrahedron, TorusKnot } from 'troisjs'
import digitsole from '~/assets/images/digitsole.webp'
import portfolio from '~/assets/images/portfolio.webp'
import profile from '~/assets/images/profile.webp'
import vite from '~/assets/images/vite.svg'

const skills = [
  {
    title: 'Web app',
    text: 'Je développe des web apps en VueJS avec une stack des plus récentes.',
    tags: ['Vue 3', 'Typescript', 'Vite', 'UnoCSS'],
  },
  {
    title: 'UI/UX Desing',
    text: 'Aussi passionné par le web design, j\'aime quand les applications sont ergonomiques, intuitives et pixel perfect.',
    tags: ['Adobe XD', 'Illustrator', 'Photoshop'],
  },
]

const projects = [
  {
    image: portfolio,
    text: 'Portfolio Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://github.com/jbaubree/portfolio/',
  },
  {
    image: digitsole,
    text: 'Digitsole Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://app.digitsolepro.com/',
  },
  {
    image: vite,
    text: 'Vite Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'https://github.com/jbaubree?tab=repositories&q=vite',
  },
]

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
          <Text>Travail avec passion</Text>
          <Title>Développement & intégration de web applications</Title>
          <Socials />
        </div>
        <Logo size="lg" :icon="Box" />
      </div>
    </Container>
  </FullPage>

  <div class="flex justify-center px-10">
    <Container class="md:mb-60">
      <div class="relative">
        <div class="absolute top-0 left--100">
          <Logo size="lg" :icon="Cone" />
        </div>
        <div class="relative bg-secondary md:pl-325px px-13 py-15 md:px-24 md:py-29 rounded-12 flex overflow-hidden">
          <img
            :src="profile"
            alt="profile-picture"
            fetchpriority="high"
            width="450"
            height="600"
            class="absolute bottom--30 left--20 hidden md-block"
            style="filter: sepia(35%) hue-rotate(195deg) saturate(500%);"
          >
          <div class="flex flex-col gap-8">
            <Text>Développeur front-end</Text>
            <Title>
              Bonjour, je m'appelle Jean-Baptiste AUBRÉE
            </Title>
            <Text>
              Passionné par le développement depuis mon plus jeune âge, je travaille en tant que développeur front-end depuis maintenance 5 ans. <br>
              Mon langage de prédilection: <span class="font-semibold">VueJS</span>.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  </div>

  <FullPage>
    <Container>
      <div class="flex items-center justify-center lg:justify-between gap-8">
        <div class="flex flex-col items-center sm:items-start gap-8">
          <Logo />
          <Title>Compétences</Title>
          <Text>
            Je développe au quotidien des applications et fonctionnalités performantes, rapides, intuitives et ergonomiques en respectant au maximum les bonnes pratiques de développement.
            Bien que je sois autonome sur du back-end, de l'infrastructure ou du design, mon principal domaine d'expertise reste le front-end.
          </Text>
          <div class="flex flex-col sm:flex-row gap-8 items-start">
            <SkillCard
              v-for="skill, index in skills"
              :key="index"
              :title="skill.title"
              :text="skill.text"
              :tags="skill.tags"
            />
          </div>
        </div>
        <Logo size="lg" :icon="Tetrahedron" class="!hidden !lg:flex" />
      </div>
    </Container>
  </FullPage>

  <FullPage class="bg-light-200">
    <Container class="flex items-start flex-col gap-8">
      <Logo variant="blue" />
      <Title class="text-primary">
        Projets
      </Title>
      <Text class="text-gray-700">
        Voici différents projets open source ou non privés sur lesquels j'ai eu l'occasion de travailler.
        Certains de ces projets ont été entièrement développés par mes soins, d'autres en partie.
      </Text>
      <div class="w-full flex gap-8 flex-wrap justify-center sm:justify-start">
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
    <Container class="flex items-center sm:items-start flex-col gap-8">
      <div class="absolute top--40 left--60">
        <Logo size="lg" :icon="Icosahedron" />
      </div>
      <Logo />
      <Title>
        Stack
      </Title>
      <Text>
        Ma stack de prédiclection avec mes librairies préférées...
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
      <div class="absolute right--30 bottom--80">
        <Logo size="lg" :icon="TorusKnot" />
      </div>
    </Container>
  </FullPage>

  <FullPage class="bg-light-200">
    <Container class="flex flex-col md:flex-row justify-between items-center w-full gap-8">
      <div class="flex flex-col items-center md:items-start gap-8">
        <Logo variant="blue" />
        <Title class="text-primary">
          Contact
        </Title>
        <Text class="text-gray-700">
          Téléphone: +33 7 60 26 94 99
          <br>
          Email: jb.aubree@protonmail.com
        </Text>
      </div>
      <div class="z-10 bg-white rounded-12 p-12 text-gray-700 shadow-2xl shadow-primary/30">
        <ContactForm />
      </div>
    </Container>
  </FullPage>
  <Footer />
</template>
