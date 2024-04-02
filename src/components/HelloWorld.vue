<script >
  import {ref,defineComponent} from 'vue'
  
  export default defineComponent({
     setup() {
      let i =ref(11)
      return { i }
     },

    })


</script>

<template>
   <div>
     {{ i }}
      
   </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

    
</style>


 