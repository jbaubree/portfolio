import { createApp } from 'vue'

import App from './App.vue'
import { i18n } from './modules/i18n'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
