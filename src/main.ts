// Gets the schema data
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// router
import route from './route'
// instance component
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(route)

app.mount('#app')
