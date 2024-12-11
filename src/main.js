import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Api } from './services/api'

const app = createApp(App)
app.config.globalProperties.$api = new Api()

app.mount('#app')
