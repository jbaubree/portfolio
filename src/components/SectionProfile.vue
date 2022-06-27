<script setup lang="ts">
import { Cone } from 'troisjs'
import profile from '~/assets/images/profile.webp'

const { isTallScreen } = useScreen()
</script>

<template>
  <FullPage>
    <Container>
      <div class="relative">
        <template v-if="isTallScreen">
          <div class="absolute top--60 left--20">
            <Logo size="lg" :icon="Cone" />
          </div>
        </template>
        <AnimatedComponent :threshold="0.2">
          <div
            class="relative bg-secondary px-13 py-15 rounded-12 flex overflow-hidden"
            md="pl-325px pr-24 py-29"
            dark="bg-white bg-opacity-35"
          >
            <img
              :src="profile"
              :alt="$t('images.profile-picture')"
              fetchpriority="high"
              width="450"
              height="600"
              class="absolute bottom--30 left--20 hidden md-block"
              :style="isDark ? '' : 'filter: sepia(35%) hue-rotate(195deg) saturate(500%);'"
            >
            <div class="flex flex-col gap-8">
              <Text>{{ $t('profile.title') }}</Text>
              <Title>
                {{ $t('profile.subtitle') }}
              </Title>
              <Text v-html="$t('profile.text')" />
            </div>
          </div>
        </AnimatedComponent>
      </div>
    </Container>
  </FullPage>
</template>
