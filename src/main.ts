import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
app.use(TroisJSVuePlugin)
app.mount('#app')
