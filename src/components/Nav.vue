<script setup lang="ts">
const { t } = useI18n()
const { pages } = useScreen()
const { locale } = useI18n()

const toggleLocale = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'fr' : 'en'
  locale.value = currentLocale.value
}

const navItems = $computed(() => [
  {
    name: t('nav.home'),
    isActive: true,
    isDisabled: true,
    icon: 'i-fa-home',
  },
  {
    name: t('nav.presentation'),
    isActive: true,
    icon: 'i-fa-user',
  },
  {
    name: t('nav.services'),
    isActive: false,
    icon: 'i-fa-rocket',
  },
  {
    name: t('nav.projects'),
    isActive: false,
    icon: 'i-fa-book',
  },
  {
    name: t('nav.stack'),
    isActive: false,
    icon: 'i-fa-stack-overflow',
  },
  {
    name: t('nav.contact'),
    isActive: false,
    icon: 'i-fa-comment',
  },
])

const scrollToSection = (index: number) => {
  window.scrollTo({
    top: pages.value[index].offsetTop,
    behavior: 'smooth',
  })
}
const { isXs } = useTailwindBreakpoints()
</script>

<template>
  <div class="flex items-center gap-6 md:gap-8 w-full justify-between sm:w-auto">
    <a
      v-for="navItem, index in navItems"
      :key="navItem.name"
      href="#"
      class="transition-all shadow-weight md:text-1rem text-sm"
      :class="{
        hidden: navItem.isDisabled,
      }"
      @click.stop.prevent="scrollToSection(index)"
    >
      <template v-if="!isXs">
        {{ navItem.name }}
      </template>
      <div
        v-else
        class="w-6 h-6"
        :class="navItem.icon"
      />
    </a>
    <div
      class="text-sm font-semibold cursor-pointer text-primary bg-white hover:bg-primary hover:text-white rounded-2 px-2 py-1 transition-colors"
      sm="text-white bg-opacity-15"
      @click="toggleLocale()"
    >
      {{ locale.toUpperCase() }}
    </div>
  </div>
</template>
