<script setup lang="ts">
const navItems = [
  {
    name: 'Accueil',
    isActive: true,
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

const offsets = ref<number[]>([])
const pages = computed(() => Array.from(document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>))
const scrollToSection = (index: number) => {
  pages.value[index].scrollIntoView({
    behavior: 'smooth',
  })
}

onMounted(() => {
  pages.value.forEach((page) => {
    offsets.value.push(page.offsetTop)
  })
})
</script>

<template>
  <div class="flex gap-8">
    <a
      v-for="navItem, index in navItems"
      :key="navItem.name"
      href="#"
      class="transition-shadow shadow-weight"
      @click.stop.prevent="scrollToSection(index)"
    >
      {{ navItem.name }}
    </a>
  </div>
</template>
