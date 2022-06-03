<script setup lang="ts">
import elipse from '~/assets/images/ellipse.svg'

const props = withDefaults(defineProps<{
  icon?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md',
})

const elipseSize = computed(() => {
  const unoCssRatio = 4
  switch (props.size) {
    case 'sm':
      return 15 * unoCssRatio
    case 'md':
      return 28 * unoCssRatio
    case 'lg':
      return 120 * unoCssRatio
  }
})
</script>

<template>
  <div class="relative flex items-center justify-center">
    <img
      :src="elipse"
      alt="logo"
      :class="{
        'min-w-15': props.size === 'sm',
        'min-w-28': props.size === 'md',
        'min-w-120': props.size === 'lg',
      }"
      :width="elipseSize"
      :height="elipseSize"
      loading="lazy"
    >
    <img v-if="props.icon" class="absolute w-full h-full" width="100%" height="100%" :src="props.icon" alt="logo-icon" loading="lazy">
  </div>
</template>
