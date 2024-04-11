<template>
    <!-- 全局公共顶部组件 -->
    <div class="G-headerTop">
        <!-- <div class="search"><i class="fa fa-location"></i></div> -->
        <slot  name="searchSlot"></slot>
        <div class="title ellipsis">{{title }}</div>
        <!-- <div class="loginAndRegister">登录|注册</div> -->
        <slot name="rightSlot"></slot>
    </div>


</template>
<script>
 
 import { defineComponent } from 'vue';

 export default defineComponent({
    setup() {

    },
    props:['title']
 })



</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../../src/common/common'
.G-headerTop
        position: fixed
        top: 0
        left: 0
        right: 0
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0  9* $vwSize
        height: 45 * $vhSize
        background-color: $mainBgColor
        color: $mainColor
        z-index :999
        .search
           width: 60*$vwSize
        .title
            width: 120*$vwSize
            height: 20 * $vhSize
            line-height: 20 * $vhSize
            font-size: 22px
            font-weight: 500
            text-align: center
            margin: 0 auto
        .loginAndRegister  
            width: 60*$vwSize
            text-align: right     
            font-size: 14px
    









 </style>