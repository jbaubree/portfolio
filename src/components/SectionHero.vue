<script setup lang="ts">
import { Box } from 'troisjs'
</script>

<template>
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
</template>
