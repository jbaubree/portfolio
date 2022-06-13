<script setup lang="ts">
import elipse from '~/assets/images/elipse.svg'
import elipseBlue from '~/assets/images/elipse-blue.svg'

const props = withDefaults(defineProps<{
  icon?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'white'
}>(), {
  size: 'md',
  variant: 'white',
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

const elipseImage = computed(() => {
  switch (props.variant) {
    case 'white':
      return elipse
    case 'blue':
      return elipseBlue
  }
})
</script>

<template>
  <div class="relative flex items-center justify-center">
    <img
      v-lazy="elipseImage"
      alt="logo"
      :class="{
        'hidden sm:flex min-w-15': props.size === 'sm',
        'hidden sm:flex min-w-28': props.size === 'md',
        'hidden md:flex md:min-w-80 lg:min-w-100 xl:min-w-110': props.size === 'lg',
      }"
      :width="elipseSize"
      :height="elipseSize"
    >
    <img
      v-if="props.icon"
      v-lazy="props.icon"
      class="absolute w-full h-full"
      width="100%"
      height="100%"
      :alt="props.icon.split('/').at(-1)?.split('.').at(0)"
    >
  </div>
</template>
