<template>
  <div class="PLogin">
    <div class="back" @click="$router.back()">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="content">
      <h1 class="title">硅谷外卖</h1>
      <form class="formLogin" method="post" @submit.prevent="login">
        <div class="loginTypeGroup">
           <div class="loginTypeSms"  :class="{'loginTypeOn':loginTypeSms===1}" @click="switchLoginType(1)">短信登录</div>
           <div class="loginTypePwd"  :class="{'loginTypeOn':loginTypeSms===2}" @click="switchLoginType(2)">密码登录</div>
        </div>
        <div class="mobileLogin" v-show="mobileLoginSmsShow==1">
          <div class="formMobilePhone">
            <input class="formLoginInput mobilePhone" type="text" name="mobilePhone" v-model ="mobilePhone" placeholder="手机号">
            <SendSmsBtn :isMobilePhone="isMobilePhone" :mobilePhone="mobilePhone"></SendSmsBtn>
          </div>
          <input class="formLoginInput" type="text" name="verCodePhone" v-model ="code" placeholder="验证码">
          <span class="loginTips"> 温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<a href="javascript:;">《用户协议》</a></span>
          <input class="loginBtn" type="submit" value="登 录"></input>
        </div>

        <div class="mobileLogin" v-show="mobileLoginPwdShow==1">
          <div class="formMobilePhone">
            <input class="formLoginInput mobilePhone" type="text" name="name" placeholder="手机/邮箱/用户名" v-model="name">
          </div>

          <input class="formLoginInput" type="password" name="verCodePhone" placeholder="密码" v-if="showPasswordOrText" v-model="pwd">
          <input class="formLoginInput" type="text" name="verCodePhone" placeholder="密码" v-else v-model="pwd">

          <div class="formMobilePwd formMobilePhone">
            <input class="formLoginInput" type="text" name="verCodePhone" v-model="captcha" placeholder="验证码">
            <!-- <img  class="formLoginInputVer" v-html="captchaSVG"  alt=""></img> -->
             <div class="formLoginInputVer"  v-html="captchaSVG" @click="getCaptchaSVG()"></div>
          </div>
          
        
          <input class="loginBtn" type="submit" value="登 录"></input>
        </div>
        <div class="aboutUs">关于我们</div>
      </form>
    </div>

    <!-- //  :AlertText="good" 加了":“这个good就是要一个vue变量，如果不加good就是一个字符串，注意区别 -->
    <!-- 刚开始不显录对话框 -->
    <!-- 自定义一个事件closeTip,这样在AlerTip可以this.$emit(closeTip)去触发这个事件，从而达到子组件向父组件通信的效果 -->
    <AlertTip v-if="showAlertTip"  :alertText="alertText" @closeTip="closeTip"></AlertTip>

  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'

import {reqCaptcha,reqLoginPwd ,reqLoginSms, } from '@/api/index.js'

import SendSmsBtn  from './SendSmsBtn.vue'
import AlertTip  from '../AlertTip/AlertTip.vue';

export default defineComponent({
  setup(){
    let loginTypeSms =ref(1) //控制登录
    let mobileLoginSmsShow = ref(1)
    let mobileLoginPwdShow = ref(0)
    let captchaSVG=ref()
    let mobilePhone=ref() //用户输入手机号
    let code=ref() //用户输入手机号验证码
    let showPasswordOrText=ref(true) //控制密码是明文还是密文显示,默认显示文本
    let name=ref()  //用户名/邮箱
    let pwd=ref()  //密码字段
    let captcha=ref()  //图形码证码
    let showAlertTip=ref(false)  //是否显示弹出框
    let alertText = ref()  //弹出的文本显示
    return {loginTypeSms,mobileLoginSmsShow,
            mobileLoginPwdShow,captchaSVG,mobilePhone,
            code,showPasswordOrText,name,
            showAlertTip,alertText,
            pwd,captcha}
  },

  mounted() {
    this.getCaptchaSVG();
    
  },
  //自定义组件引入
  components:{SendSmsBtn,AlertTip},

  computed:{
    //计算正确的手机号
    rightPhone() {
       return /^1\d{10}$/.test(this.mobilePhone)
    },

  },

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
    },
    //弹出对话框
    showAlert(alertText) {
      
      this.showAlertTip = true
      this.alertText = alertText

    },
    //登录的方法
    async login(){
      //如果是手机登录,
       let result 
       if (this.mobileLoginSmsShow){
          const {rightPhone, mobilePhone,code} = this
          if(!this.rightPhone){
             //如果手机号不正确      
             this.showAlert('手机号码不正确')
             return
          } else if(!/^\d{6}$/.test(code)) {
               //验证码必须是6位数字
             this.showAlert('验证码必须是6位数字')
             return
          }
          //开始发送短信登录请求
          result = await reqLoginSms({phone:mobilePhone,code:code})
       }
       // 如果是用户名密码
       if (this.mobileLoginPwdShow){
        const {name,pwd,captcha} = this
          if(!this.name){
               //必须指定用户名  
               this.showAlert('用户名不能为空')
               return
          } else if(!this.pwd) {
               //密码不能为空
               this.showAlert('密码不能为空')
               return
          }else if(!this.captcha) {
               //验证码不能为空
               this.showAlert('验证码不能为空')
               return
          }

          //开始送用户名请求
          result = await reqLoginPwd({name,pwd,captcha})

       }

       //对登录请求返回的数据进行处理
       if (result.code===0) {
          const user = result.data
          //保存用户到vuex
          this.$store.dispatch('setUserInfo',user)
          //登录成功后返回root
          this.$router.replace("/")

       } else {
          const msg = result.msg
          this.showAlert(msg)
          this.getCaptchaSVG()

       }


    },

    //关闭弹出提示对话框
    closeTip(){
      this.showAlertTip = false
      this.alertText = ''
    }
  },
  
})




</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import '../Login'



 </style>