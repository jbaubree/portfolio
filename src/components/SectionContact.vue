<script setup lang="ts">
import { Torus } from 'troisjs'
</script>

<template>
  <FullPage background="bg-light-200" class="relative" animated-wrapper-class="w-full flex justify-between" animated-class="w-full flex justify-center">
    <Container class="flex flex-col items-center md:items-start md:flex-row justify-between items-center w-full gap-8">
      <div class="flex flex-col items-center md:items-start gap-8 z-1">
        <Logo variant="primary" />
        <Title class="text-primary" dark="text-white">
          {{ $t('contact.contact') }}
        </Title>
        <Text class="text-gray-700" dark="text-white">
          {{ $t('contact.phone') }}: <a class="font-semibold" href="tel:+33760269499">+33 7 60 26 94 99</a>
          <br>
          {{ $t('contact.email') }}: <a class="font-semibold" href="mailto:jb.aubree@protonmail.com">jb.aubree@protonmail.com</a>
        </Text>
      </div>
      <AnimatedComponent>
        <div
          class="bg-white p-12 text-gray-700 w-full rounded-12 shadow-2xl shadow-primary/30"
          md="w-auto"
          dark="bg-white bg-opacity-35"
        >
          <ContactForm />
        </div>
      </AnimatedComponent>
      <div class="absolute left--20 bottom-0">
        <Logo size="lg" :icon="Torus" />
      </div>
    </Container>
  </FullPage>
</template>

