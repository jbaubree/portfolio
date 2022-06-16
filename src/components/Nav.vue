<script setup lang="ts">
const { t } = useI18n()

const navItems = $computed(() => [
  {
    name: t('nav.home'),
    isActive: true,
    isDisabled: true,
  },
  {
    name: t('nav.presentation'),
    isActive: true,
  },
  {
    name: t('nav.skills'),
    isActive: false,
  },
  {
    name: t('nav.projects'),
    isActive: false,
  },
  {
    name: t('nav.stack'),
    isActive: false,
  },
  {
    name: t('nav.contact'),
    isActive: false,
  },
])

const pages = $computed(() => Array.from(document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>))

const scrollToSection = (index: number) => {
  pages[index].scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="flex gap-6 md:gap-8">
    <a
      v-for="navItem, index in navItems"
      :key="navItem.name"
      href="#"
      class="transition-all shadow-weight md:text-1rem text-sm"
      :class="{ hidden: navItem.isDisabled }"
      @click.stop.prevent="scrollToSection(index)"
    >
      {{ navItem.name }}
    </a>
  </div>
</template>
