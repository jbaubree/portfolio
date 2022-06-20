<script setup lang="ts">
import { Tetrahedron } from 'troisjs'
import ServiceCard from './ServiceCard.vue'

const { t } = useI18n()

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
</script>

<template>
  <FullPage>
    <Container>
      <AnimatedComponent :threshold="0.1">
        <div class="flex items-center justify-center lg:justify-between gap-8">
          <div class="flex flex-col items-center md:items-start gap-8">
            <Logo />
            <Title>{{ $t('services.service', 2) }}</Title>
            <Text>
              {{ $t('services.text') }}
            </Text>
            <AnimatedComponent>
              <div class="flex flex-col sm:flex-row gap-8 items-start">
                <ServiceCard
                  v-for="service, index in services"
                  :key="index"
                  :title="service.title"
                  :text="service.text"
                  :tags="service.tags"
                />
              </div>
            </AnimatedComponent>
          </div>
          <Logo size="lg" :icon="Tetrahedron" class="!hidden !lg:flex" />
        </div>
      </AnimatedComponent>
    </Container>
  </FullPage>
</template>
