import { createApp } from 'vue'

//清除默认样式
import '@/assets/css/reset.css'
import './style.css'
import App from './App.vue'

//引入路由器
import router from '@/router/index.js'

//创建app，并mount.
const app = createApp(App)

app.use(router)
app.mount('#app')
