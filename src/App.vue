<script>
import { defineComponent } from 'vue';
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

//引入自定义的api
import {reqFoodCategorys} from '../src/api/index'

export default defineComponent({
  name: 'App',
  //局部组件
  components: { FooterGuide },
  async mounted(){
    this.$store.dispatch('getFoodCategorys')
    this.$store.dispatch('getAddress')
    //获取商家列表
   this.$store.dispatch('getShoplist')
   //获取商品列表

   //获取用户信息
   this.getUserInfo()
   

  },
  methods:{
    ...mapActions(['getUserInfo'])
  }

})


</script>

<template>
  <div class="root">
    <router-view></router-view> 
    <!-- 页面底部组件 -->
    <FooterGuide v-show="$route.meta.showFooter"> </FooterGuide>

  </div>


</template>

<style lang='stylus' rel='stylesheet/stylus'>
 .root
   position:absolute
   width:100%
   height:100%
   background-color: #f5f5f5
   .displayOn
    display:flex
   .displayOff
     display:none
</style>

