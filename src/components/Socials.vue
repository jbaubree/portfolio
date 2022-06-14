<script setup lang="ts">
const links = [
  {
    href: 'https://github.com/jbaubree',
    icon: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/jb-aubree/',
    icon: 'linkedin',
  },
  {
    href: 'mailto:jb.aubree@protonmail.com',
    icon: 'envelope',
  },
]
</script>

<template>
  <div class="flex gap-4">
    <a
      v-for="link in links"
      :key="link.icon"
      :href="link.href"
      target="_blank"
      class="w-8 h-8"
      :class="{
        'i-fa-github': link.icon === 'github',
        'i-fa-linkedin': link.icon === 'linkedin',
        'i-fa-envelope': link.icon === 'envelope',
      }"
    />
  </div>
</template>
