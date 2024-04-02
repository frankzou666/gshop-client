
import { createRouter,createWebHashHistory } from "vue-router";

import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'

const routes=[
    {
        path:'/',
        component:Msite
    },
    {
        path:'/msite',
        component:Msite
    },
    {
        path:'/order',
        component:()=>import('../pages/Order/Order.vue')
    },
    {
        path:'/profile',
        component:()=>import('../pages/Profile/Profile.vue')
    },
    {
        path:'/search',
        component:()=>import('../pages/Search/Search.vue')
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

export default router