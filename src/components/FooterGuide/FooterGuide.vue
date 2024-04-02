 <template>
  <div class="PfooterGuide"> 
     <!-- 通过当前path决定一个类，并进行不同的显示，同时也使用 ｜ 表示或 -->
     <a href="javascirpt:" class="guideItem" :class="{activeGuideItem:'/msite'===$route.path|'/'===$route.path }"  @click="goTo('/msite')">
      <span class="itemIcon"><i class="fa fa-home"></i></span>
       <span >外卖</span>
     </a>
     <a href="javascirpt:" class="guideItem"  :class="{activeGuideItem:'/search'===$route.path}" @click="goTo('/search')">
       <span class="itemIcon"><i class="fa fa-search"></i></span>
       <span class="">搜索</span>
     </a>
     <a href="javascirpt:" class="guideItem" :class="{activeGuideItem:'/order'===$route.path}" @click="goTo('/order')">
       <span class="itemIcon"><i class="fa fa-folder"></i></span>
       <span >订单</span>
     </a>
     <a href="javascirpt:" class="guideItem" :class="{activeGuideItem:'/profile'===$route.path}" @click="goTo('/profile')">
       <span class="itemIcon"><i class="fa fa-circle-user"></i></span>
       <span >我的</span>
     </a>

  </div>
 </template>
 <script>
  import {defineComponent,ref} from 'vue'
  export default defineComponent({
    name:'FooterGuide',
    setup() {

      let isActiveGuideItem = ref(true);
      return {
        isActiveGuideItem
      }

    },
    methods:{
      //定义路由转函数
      goTo:function(path) {
        this.$router.push(path)
      }
    }
    
  })










 </script>
 <style lang='stylus' rel='stylesheet/stylus'>
    @import '../../../src/common/common'

   .PfooterGuide
     //background-color red
     display flex
     justify-content space-around
     align-items center
     position fixed
     left 0
     right 0
     bottom 0
     width 100%
     height 50 * $vhSize
     border-top 1px solid #e4e4e4
     z-index :999
     background-color:$mainColor
     .guideItem 
       font-size 14px
       display block
       flex 1
       height 100%
       color #aaa
       text-align center
       display flex
       flex-direction column
       align-items center
       justify-content center
       &.activeGuideItem
         color skyblue
   
       

     









 </style>