 <template>
  <div>
    <p>shop component</p>
    <div class="tab">
        <div class="goods">
            <router-link to="/shop/goods">goods</router-link>
        </div>
        <div class="info">
            <router-link to="/shop/info">info</router-link>
        </div>
        <div class="ratings">
            <router-link to="/shop/ratings">ratings</router-link>
        </div>
    </div>
    <router-view></router-view>




  </div>
 </template>
 <script>

import { defineComponent ,ref} from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
    setup(){
        return {}
    },
    mounted(){
       this.$store.dispatch('getShopInfo')
    },
    computed:{
        ...mapState(['info'])

    },


})







 </script>

  <style lang='stylus' rel='stylesheet/stylus'>









 </style>