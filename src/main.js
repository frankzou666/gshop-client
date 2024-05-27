import { createApp } from 'vue'

//清除默认样式
import '@/assets/css/reset.css'
import './style.css'
import App from './App.vue'

import { Button } from 'vant';
import 'vant/lib/index.css';


import {Swiper,SwiperSlide} from 'swiper/vue'



//引入路由器
import router from '@/router/index.js'

//引入vuex
import store from '@/store/index.js'
//全局组件注册
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'

import './mock/mockServer'



//创建app，并mount.
const app = createApp(App)

app.component('HeaderTop',HeaderTop)

app.component('swiper',Swiper)

app.use(router)

app.use(store)

app.use(Button)

app.mount('#app')
