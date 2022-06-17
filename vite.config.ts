import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Sitemap from 'vite-plugin-sitemap'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

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
        '@vueuse/core',
        'vue',
        'vue-i18n',
        'vue/macros',
      ],
      dirs: [
        'src/utils',
        'src/composables',
        'src/directives',
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
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, 'locales/**')],
    }),
  ],
})
