<script setup lang="ts">
const navItems = [
  {
    name: 'Accueil',
    isActive: true,
    isDisabled: true,
  },
  {
    name: 'Compétences',
    isActive: false,
  },
  {
    name: 'Projets',
    isActive: false,
  },
  {
    name: 'Stack',
    isActive: false,
  },
  {
    name: 'Contact',
    isActive: false,
  },
]

const pages = computed(() => Array.from(document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>))

const scrollToSection = (index: number) => {
  pages.value[index].scrollIntoView({
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
      class="transition-shadow shadow-weight md:text-1rem text-sm"
      :class="{ hidden: navItem.isDisabled }"
      @click.stop.prevent="scrollToSection(index)"
    >
      {{ navItem.name }}
    </a>
  </div>
</template>
