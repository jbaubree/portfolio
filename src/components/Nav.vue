<script setup lang="ts">
const { t } = useI18n()
const { pages } = useScreen()
const { locale } = useI18n()

const toggleLocale = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'fr' : 'en'
  locale.value = currentLocale.value
}

const navItems = computed(() => [
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
      class="text-size-[clamp(0.8rem,0.1rem+1vw,1rem)] relative group"
      :class="{
        hidden: navItem.isDisabled,
      }"
      :aria-label="navItem.name"
      @click.stop.prevent="scrollToSection(index)"
    >
      <span
        v-if="!isXs"
        class="after:content-empty after:transition-transform after:border-b-1px after:border-color-white after:absolute after:bottom--4px after:left-0 after:w-full after:scale-x-0 after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100"
      >
        {{ navItem.name }}
      </span>
      <div
        v-else
        class="w-5 h-5"
        :class="navItem.icon"
      />
    </a>
    <div
      class="text-xs font-semibold cursor-pointer text-primary bg-white hover:bg-opacity-50 hover:text-white rounded-2 px-1.5 py-.75 transition-colors"
      sm="text-white bg-opacity-15 text-sm px-2 py-1"
      @click="toggleLocale()"
    >
      {{ locale.toUpperCase() }}
    </div>
    <slot />
  </div>
</template>
