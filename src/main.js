import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
