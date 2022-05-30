<script setup lang="ts">
import type { PropType } from 'vue'
import elipse from '~/assets/images/ellipse.svg'
import cube from '~/assets/images/cube.svg'

type Size = 'sm' | 'md' | 'lg'

const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  size: {
    type: String as PropType<Size>,
    required: false,
  },
})

const icon = computed(() => {
  switch (props.icon) {
    case 'cube':
      return cube
    default:
      return undefined
  }
})

const elipseSize = computed(() => {
  const unoCssRatio = 4
  switch (props.size) {
    case 'sm':
      return 15 * unoCssRatio
    case 'lg':
      return 134 * unoCssRatio
    default:
      return 100 * unoCssRatio
  }
})
</script>

<template>
  <div class="relative">
    <img
      :src="elipse"
      alt="logo"
      :class="{
        'min-w-15': props.size === 'sm',
        'min-w-100': props.size === 'md' || props.size === undefined,
        'min-w-134': props.size === 'lg',
      }"
      :width="elipseSize"
      :height="elipseSize"
    >
    <img v-if="props.icon" class="absolute top-0 left-0 w-full h-full" width="100%" height="100%" :src="icon" alt="logo-icon">
  </div>
</template>
