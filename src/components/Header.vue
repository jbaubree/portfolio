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
</script>

<template>
  <div class="flex items-center justify-between mb-40">
    <Logo size="sm" />
    <div class="flex gap-8">
      <a
        v-for="navItem in navItems"
        :key="navItem.name"
        href="#"
        class="text-1.25rem"
        :class="{ 'font-semibold': navItem.isActive }"
      >
        {{ navItem.name }}
      </a>
    </div>
  </div>
</template>
