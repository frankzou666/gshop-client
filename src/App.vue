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
    <FooterGuide> </FooterGuide>

  </div>




</template>

<style lang='stylus' rel='stylesheet/stylus'>
 .root
   width 100%
   height 100%
   background-color #f5f5f5;
</style>

