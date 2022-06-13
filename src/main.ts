import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
app.use(VueLazyload)
app.mount('#app')
