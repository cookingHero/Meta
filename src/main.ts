// Gets the schema data
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
// Imoprt ant-design css
import 'ant-design-vue/dist/antd.css';

// router
import router from './route'
// instance component
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(Antd)

app.mount('#app')
