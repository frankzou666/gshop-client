 <template>
     <button class="formMobilePhoneGetVerCode" 
               :class="{'formMobilePhoneGetVerCodeEnable':(isMobilePhone&&isMobilePhoneFromInterval)}" 
               :disabled="!(isMobilePhone&&isMobilePhoneFromInterval)"
               @click="handleClick"
               
               >{{ smsBtnText }}
     </button>
 </template>
 <script>
  
  import { defineComponent,ref} from 'vue';

  export default defineComponent({
    name:'SendSmsBtn',
    setup() {
        let smsBtnText = ref("获取验证码")
        let isMobilePhoneFromInterval = ref(false)
        return {smsBtnText,isMobilePhoneFromInterval}

    },
  

    props:['mobilePhone'],
    methods:{
        handleClick:function(event) {
            event.preventDefault();
            alert("send sms")
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
  @import '../Login'









 </style>