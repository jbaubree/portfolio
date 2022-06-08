<script setup lang="ts">
import profile from '~/assets/images/profile.png'
import cube from '~/assets/images/cube.svg'
import arrowRight from '~/assets/images/arrow-right.svg'
import digitsole from '~/assets/images/digitsole.svg'
import portfolio from '~/assets/images/portfolio.svg'
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
    text: 'Portfolio',
  },
  {
    image: digitsole,
    text: 'Digitsole',
  },
  {
    image: vite,
    text: 'Vite',
  },
]
</script>

<template>
  <Container>
    <div class="flex items-center justify-between mb-40">
      <div class="flex flex-col gap-10">
        <Text>Travail avec passion</Text>
        <Title>Développement & intégration de web applications</Title>
        <Socials />
      </div>
      <Logo size="lg" :icon="cube" />
    </div>
  </Container>

  <Container>
    <div class="relative mb-95">
      <div class="absolute top-0 left--120">
        <Logo size="lg" :icon="arrowRight" />
      </div>
      <div class="relative bg-secondary pl-325px pr-24 py-29 rounded-12 flex overflow-hidden">
        <img :src="profile" alt="profile-picture" width="450" height="600" class="absolute bottom--30 left--20" loading="lazy">
        <div class="flex flex-col gap-5">
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

  <Container>
    <div class="flex items-center justify-between gap-5 pb-31">
      <div class="flex flex-col items-start gap-5">
        <Logo />
        <Title>Compétences</Title>
        <Text>
          Je développe au quotidien des applications et fonctionnalités performantes, rapides, intuitives et ergonomiques en respectant au maximum les bonnes pratiques de développement.
          Bien que je sois autonome sur du back-end, de l'infrastructure ou du design, mon principal domaine d'expertise reste le front-end.
        </Text>
        <div class="flex gap-12 items-start flex-wrap">
          <SkillCard
            v-for="skill, index in skills"
            :key="index"
            :title="skill.title"
            :text="skill.text"
            :tags="skill.tags"
          />
        </div>
      </div>
      <Logo size="lg" :icon="cube" class="z--1" />
    </div>
  </Container>

  <div class="px-69.5 flex flex-col items-start gap-5 py-38 bg-light-200">
    <Logo variant="blue" />
    <Title class="text-primary">
      Projets
    </Title>
    <Text class="text-gray-700">
      Voici différents projets open source ou non privés sur lesquels j'ai eu l'occasion de travailler.
      Certains de ces projets ont été entièrement développés par mes soins, d'autres en partie.
    </Text>
    <div class="w-full flex justify-between">
      <ProjectCard
        v-for="project, index in projects"
        :key="index"
        :image="project.image"
        :text="project.text"
      />
    </div>
  </div>
</template>
