import { createApp } from 'vue'

import App from './App.vue'

import './pwa'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
app.use(i18n)
app.directive('appear', appear)
app.mount('#app')
