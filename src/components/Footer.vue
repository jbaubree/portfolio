<script setup lang="ts">
const { locale } = useI18n()

const toggleLocale = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'fr' : 'en'
  locale.value = currentLocale.value
}
</script>

<template>
  <div class="px-10 bg-primary">
    <div class="flex justify-center">
      <Container class="flex flex-col md:flex-row items-center justify-between py-11 gap-4">
        <div class="flex gap-8 items-center">
          <Socials />
          <div class="font-bold cursor-pointer" @click="toggleLocale()">
            {{ locale.toUpperCase() }}
          </div>
        </div>
        <hr class="block md:hidden border w-200px opacity-50">
        <Nav />
      </Container>
    </div>
  </div>
</template>
