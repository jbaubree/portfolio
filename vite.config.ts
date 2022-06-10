import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

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
            'useScroll',
            'useScrollLock',
          ],
        },
        'vue',
      ],
      dirs: [
        'src/utils',
      ],
      vueTemplate: true,
      dts: true,
    }),
    Components({
      dts: true,
    }),
    Unocss(),
  ],
})
