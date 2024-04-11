<script>
import { defineComponent } from 'vue';
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default defineComponent({
  name: 'App',
  //局部组件
  components: { FooterGuide },
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

