 <template>
  <div class="P-alertText">

     <div class="AlertTipContainer">
        <h2 class="AlertTipTitle">温馨提示</h2>
        <p class="AlertTipContent">{{ alertText }}</p>
        <button class="AlertTipCloseBtn" @click="closeTip">关闭</button>
     </div>

    

  </div>
 </template>
 <script>
 //自定义登录的时候的组件
  import { defineComponent } from 'vue';

  export default defineComponent({

    setup(){

    },
    props:['alertText'],

    methods:{
        closeTip(){
            this.$emit('closeTip')
        }

    }

  })









 </script>
  <style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/common'

   .P-alertText
      position fixed
      background-color: rgba(221,221,221,0.7)
      width 100%
      height 100%
      top 0
      left 0
      bottom 0
      right 0
      .AlertTipContainer
        
        width: 240*$vhSize
        background-color: #fff
        margin:0 auto
        transform:translateY(140%)
        border-radius: 8px
        .AlertTipTitle
            text-align:center
            padding: 10*$vhSize 0
            font-size: 18*$vhSize
            font-weight:700
        .AlertTipContent
            text-align:center
            padding: 13*$vhSize 0
            border-top:1px solid #ccc
            border-bottom:1px solid #ccc
        .AlertTipCloseBtn
            border:0    
            color:#fff
            padding: 10*$vhSize 0
            width:100%
            background-color:#1fd43d
            border-bottom-left-radius:  8px
            border-bottom-right-radius:  8px










 </style>