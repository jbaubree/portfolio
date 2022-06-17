<script setup lang="ts">
import digitsole from '~/assets/images/digitsole.webp'
import portfolio from '~/assets/images/portfolio.webp'
import vite from '~/assets/images/vite.svg'

const { t } = useI18n()

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
</script>

<template>
  <FullPage background="bg-light-200">
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
</template>
