 <template>
  <div>
    <button class="formMobilePhoneGetVerCode" 
               :class="{'formMobilePhoneGetVerCodeEnable':(isMobilePhone&&isMobilePhoneFromInterval)}" 
               :disabled="!(isMobilePhone&&isMobilePhoneFromInterval)"
               @click.prevent="handleClick"
               
               >{{ smsBtnText }}
               
    </button>
     <AlertTip v-if="showAlertTipSms"  :alertText="alertText" @closeTip="closeTip"></AlertTip>

  </div>
    
 </template>
 <script setuped>
  
  import { defineComponent,ref} from 'vue';
  import {reqSendSms} from '@/api/index.js'

  import AlertTip from '@/components/AlertTip/AlertTip.vue'

  export default defineComponent({
    name:'SendSmsBtn',
    setup() {
        let smsBtnText = ref("获取验证码")
        let isMobilePhoneFromInterval = ref(false)
        let showAlertTipSms = ref(false) //显示提示框
        let alertText = ref('') //提示框文字
        return {smsBtnText,isMobilePhoneFromInterval,showAlertTipSms,alertText}

    },
    components: {AlertTip},

    props:['mobilePhone'],
    methods:{
        //点击发送验证码
        handleClick:async function(event) {
            event.preventDefault();
            //alert("send sms")
            let i = 10;
            this.isMobilePhoneFromInterval=false
            let timeOuter = setInterval(()=>{
                 this.smsBtnText="重新发送("+i+")秒"
                 i=i-1;
                 if (i ==0) {
                    this.smsBtnText= "获取验证码"
                    clearInterval(timeOuter)
                    this.isMobilePhoneFromInterval=true
                 }
            },1000)
            //请求发送验证码
            let result = await reqSendSms(this.mobilePhone)
            if (result.code ===1) {
               //如果没有停止到计时，则要停止
               if (!this.isMobilePhoneFromInterval===true ){
                    this.smsBtnText= "获取验证码"
                    clearInterval(timeOuter)
                    this.isMobilePhoneFromInterval=true
               }
               this.showAlertTipSms = true
               this.alertText = '获取短信验证码失败,请稍候重试!'
               return false
               

            }
            return false


        },
         //关闭弹出提示对话框
        closeTip(){
          this.showAlertTipSms = false
          this.alertText = ''
          return false
       }
    },
    computed:{
    isMobilePhone:function() {
      const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      this.isMobilePhoneFromInterval = true
      return reg.test(this.mobilePhone);
    }
    }
  })



 </script>
  <style lang='stylus' rel='stylesheet/stylus'>










 </style>