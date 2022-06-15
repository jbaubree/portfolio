import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    AutoImport({
      imports: [
        {
          '@vueuse/core': [
            'useEventBus',
          ],
        },
        'vue',
      ],
      dirs: [
        'src/utils',
        'src/composables',
      ],
      vueTemplate: true,
      dts: true,
    }),
    Components({
      dts: true,
    }),
    Unocss(),
    Sitemap({
      hostname: 'https://jbaubree.fr/',
    }),
  ],
})
