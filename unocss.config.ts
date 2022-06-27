import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  theme: {
    duration: {
      DEFAULT: '.3s',
    },
    colors: {
      primary: '#1c2aaf',
      secondary: '#3747e4',
      pink: '#f1599e',
      violet: '#7209b7',
      darkViolet: '#3a0ca3',
      darkBlue: '#4361ee',
      blue: '#4cc9f0',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Montserrat:300,600',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
