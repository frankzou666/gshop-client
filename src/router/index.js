
import { createRouter,createWebHashHistory } from "vue-router";

import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'



const routes=[
    {
        path:'/',
        component:Msite,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/msite',
        component:Msite,
        meta:{
          showFooter:true
        },
    },
    {
        path:'/order',
        component:()=>import('../pages/Order/Order.vue'),
        meta:{
          showFooter:true
        },
    },
    {
        path:'/profile',
        component:()=>import('../pages/Profile/Profile.vue'),
        meta:{
          showFooter:true
        },
    },
    {
        path:'/search',
        component:()=>import('../pages/Search/Search.vue'),
        meta:{
          showFooter:true
        },
    },
    {
        path:'/login',
        component:()=>import('../components/Login/Login.vue'),
        meta:{
          showFooter:false
        },
    },

    {
      path:'/shop',
      component:()=>import('../pages/Shop/Shop.vue'),
      children:[
        {
          path:'/shop/goods',
          component:()=>import('../pages/Shop/ShopGoods/ShopGoods.vue'),
        },
        {
          path:'/shop/info',
          component:()=>import('../pages/Shop/ShopInfo/ShopInfo.vue'),
        },
        {
          path:'/shop/ratings',
          component:()=>import('../pages/Shop/ShopRatings/ShopRatings.vue'),
        },

        {
          path:'/',
          redirect:()=>import('../pages/Shop/ShopGoods/ShopGoods.vue'),
        },

      ],
      meta:{
       
      },
    },
]


const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

export default router