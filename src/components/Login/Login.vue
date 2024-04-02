 <template>
  <div class="PLogin">
     <div class="back" @click="goTo('/profile')">
        <i class="fa fa-chevron-left"></i>
     </div>

  </div>
 </template>
 <script>
 import {defineComponent} from 'vue'
  
  export default defineComponent({
    methods:{
      goTo:function(path){
        this.$router.push(path)
      }
    }
  })









 </script>
  <style lang='stylus' rel='stylesheet/stylus'>









 </style>