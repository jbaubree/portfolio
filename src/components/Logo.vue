<script setup lang="ts">
import { DoubleSide } from 'three'
import { AmbientLight, Camera, PhongMaterial, PointLight, Renderer, Scene } from 'troisjs'
import type { Component } from 'vue'
import elipse from '~/assets/images/elipse.svg'
import elipseBlue from '~/assets/images/elipse-blue.svg'

const { icon, size = 'md', variant = 'white' } = defineProps<{
  icon?: Component
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'white'
}>()

const elipseSize = $computed(() => {
  const unoCssRatio = 4
  switch (size) {
    case 'sm':
      return 10 * unoCssRatio
    case 'md':
      return 28 * unoCssRatio
    case 'lg':
      return 120 * unoCssRatio
  }
})

const elipseImage = $computed(() => {
  switch (variant) {
    case 'white':
      return elipse
    case 'primary':
      return elipseBlue
  }
})
</script>

<template>
  <div
    class="relative items-center justify-center"
    :class="{
      'hidden sm:flex min-w-10': size === 'sm',
      'hidden sm:flex min-w-28': size === 'md',
      'hidden md:flex md:min-w-80 w-80 lg:min-w-100 xl:min-w-110': size === 'lg',
    }"
  >
    <img
      :src="elipseImage"
      alt="logo"
      fetchpriority="high"
      :width="elipseSize"
      :height="elipseSize"
    >
    <Renderer
      v-if="icon"
      ref="renderer"
      class="absolute"
      width="200%"
      height="200%"
      :pixel-ratio="2"
      antialias
      alpha
      :orbit-ctrl="{ enableZoom: false, autoRotate: true, autoRotateSpeed: 6, enableDamping: true, dampingFactor: 0.05 }"
    >
      <Camera
        :position="{
          x: icon?.name === 'Cone' ? 2 : 1,
          y: icon?.name === 'Cone' ? 3 : 2,
          z: icon?.name === 'Torus' ? 4 : 2,
        }"
      />
      <Scene>
        <AmbientLight color="#808080" />
        <PointLight :position="{ y: 10, z: 10 }" />
        <component :is="icon" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <PhongMaterial color="#ea9804" :props="{ side: DoubleSide }" />
        </component>
      </Scene>
    </Renderer>
  </div>
</template>
