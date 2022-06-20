<script setup lang="ts">
import { Torus } from 'troisjs'
</script>

<template>
  <FullPage background="bg-light-200" class="relative">
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
      <AnimatedComponent>
        <div class="bg-white rounded-12 p-12 text-gray-700 w-full md:w-auto shadow-2xl shadow-primary/30">
          <ContactForm />
        </div>
      </AnimatedComponent>
      <div class="absolute left--20 bottom-0">
        <Logo size="lg" :icon="Torus" />
      </div>
    </Container>
  </FullPage>
</template>

