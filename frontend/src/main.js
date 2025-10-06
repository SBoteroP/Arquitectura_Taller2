import { createApp } from 'vue'
import App from './App.vue'
import apollo from './apollo'
import './assets/main.css'
const app = createApp(App)
app.use(apollo)
app.mount('#app')