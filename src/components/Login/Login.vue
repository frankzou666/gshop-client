<template>
  <div class="PLogin">
    <div class="back" @click="$router.back()">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="content">
      <h1 class="title">硅谷外卖</h1>
      <form class="formLogin" method="post">
        <div class="loginTypeGroup">
           <div class="loginTypeSms"  :class="{'loginTypeOn':loginTypeSms===1}" @click="switchLoginType(1)">短信登录</div>
           <div class="loginTypePwd"  :class="{'loginTypeOn':loginTypeSms===2}" @click="switchLoginType(2)">密码登录</div>
        </div>
        <div class="mobileLogin" v-show="mobileLoginSmsShow==1">
          <div class="formMobilePhone">
            <input class="formLoginInput mobilePhone" type="text" name="mobilePhone" v-model ="mobilePhone" placeholder="手机号">
            <SendSmsBtn :isMobilePhone="isMobilePhone" :mobilePhone="mobilePhone"></SendSmsBtn>
          </div>
          <input class="formLoginInput" type="text" name="verCodePhone" placeholder="验证码">
          <span class="loginTips"> 温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<a href="javascript:;">《用户协议》</a></span>
          <input class="loginBtn" type="submit" value="登 录"></input>
        </div>

        <div class="mobileLogin" v-show="mobileLoginPwdShow==1">
          <div class="formMobilePhone">
            <input class="formLoginInput mobilePhone" type="text" name="username" placeholder="手机/邮箱/用户名">
          </div>

          <input class="formLoginInput" type="password" name="verCodePhone" placeholder="密码" v-if="showPasswordOrText" v-model="pwd">
          <input class="formLoginInput" type="text" name="verCodePhone" placeholder="密码" v-else v-model="pwd">

          <div class="formMobilePwd formMobilePhone">
            <input class="formLoginInput" type="password" name="verCodePhone" placeholder="验证码">
            <!-- <img  class="formLoginInputVer" v-html="captchaSVG"  alt=""></img> -->
             <div class="formLoginInputVer"  v-html="captchaSVG" @click="getCaptchaSVG()"></div>
          </div>
          
        
          <input class="loginBtn" type="submit" value="登 录"></input>
        </div>
        <div class="aboutUs">关于我们</div>
      </form>
    </div>

  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'

import {reqCaptcha} from '@/api/index.js'

import SendSmsBtn  from './SendSmsBtn.vue'

export default defineComponent({
  setup(){
    let loginTypeSms =ref(1) //控制登录
    let mobileLoginSmsShow = ref(1)
    let mobileLoginPwdShow = ref(0)
    let captchaSVG=ref()
    let mobilePhone=ref() //用户输入手机号
    let showPasswordOrText=ref(true) //控制密码是明文还是密文显示,默认显示文本
    let pwd=ref()  //密码字段
    return {loginTypeSms,mobileLoginSmsShow,mobileLoginPwdShow,captchaSVG,mobilePhone,showPasswordOrText,pwd}
  },

  mounted() {
    this.getCaptchaSVG();
    
  },
  components:{SendSmsBtn},

  methods: {
    goTo:function (path) {
      this.$router.push(path)
    },

    //使用不同的登录方法
    switchLoginType:function(loginType){
       if(this.loginTypeSms!==loginType) { 
        this.loginTypeSms=loginType
      }

      //1就显示手机登录
      if (this.loginTypeSms===1) { this.mobileLoginSmsShow = 1,this.mobileLoginPwdShow=0}
      
      //2显示用户名密码登录
      if (this.loginTypeSms===2) { this.mobileLoginSmsShow = 0,this.mobileLoginPwdShow=1}
    },
    
    //请求验证码
    getCaptchaSVG:async function() {
       let result = await reqCaptcha()
       this.captchaSVG = result
    }
  },
  
})




</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import '../Login'



 </style>