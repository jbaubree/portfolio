import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

const preferedLocale = usePreferredLanguages().value[0].split('-')[0] === 'fr' ? 'fr' : 'en'

export const currentLocale = useLocalStorage('locale', preferedLocale)

export const i18n = createI18n({
  legacy: false,
  locale: currentLocale.value,
  messages,
  globalInjection: true,
})
