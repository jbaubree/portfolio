<script setup lang="ts">
const links = [
  {
    name: 'Github',
    href: 'https://github.com/jbaubree',
    icon: 'github',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/jb-aubree/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    href: 'mailto:jb.aubree@protonmail.com',
    icon: 'envelope',
  },
]
</script>

<template>
  <div class="flex gap-4">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.href"
      target="_blank"
      :aria-label="link.name"
      class="w-8 h-8"
      :class="{
        'i-fa-github': link.icon === 'github',
        'i-fa-linkedin': link.icon === 'linkedin',
        'i-fa-envelope': link.icon === 'envelope',
      }"
    />
  </div>
</template>
