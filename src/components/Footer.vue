<script setup lang="ts">
import { locale as localStorageLocale } from '~/modules/i18n'
const { locale } = useI18n()

const toggleLocale = () => {
  localStorageLocale.value = localStorageLocale.value === 'en' ? 'fr' : 'en'
  locale.value = localStorageLocale.value
}
</script>

<template>
  <div class="px-10">
    <div class="flex justify-center">
      <Container class="flex flex-col md:flex-row items-center justify-between py-11 gap-4">
        <div class="flex gap-8 items-center">
          <Socials />
          <div class="font-bold cursor-pointer" @click="toggleLocale()">
            {{ locale.toUpperCase() }}
          </div>
        </div>
        <Nav />
      </Container>
    </div>
  </div>
</template>
