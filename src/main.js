import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import router from "./router"
import { makeServer } from "./mirage-server"
import store from "./store"

makeServer()

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
