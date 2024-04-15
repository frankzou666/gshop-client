<template>
    <li class="contentItem">
        <a href="script" class="contentShop">
            <div class="contentShopLeft"><img src="../../../assets/imgs/shop/1.jpg" class="contentShop-l" alt="">
            </div>
            <div class="contentShopRight">
                <div class="contentShopRightTop">
                    <h4 class="shopTitle ellipsis">{{ shop.name }}</h4>
                    <ul class="shopTag">
                        <li class="shopTagItem" v-for="(item,index) in shop.supports" :key="index"><span :style="{'color':'#'+item.icon_color}">{{ item.icon_name }}</span></li>
                        

                        <!-- <li class="shopTagItem"><span v-show="">保</span></li>
                        <li class="shopTagItem"><span>准</span></li>
                        <li class="shopTagItem"><span>票</span></li> -->
                    </ul>
                </div>
                <div class="contentShopRightMiddle">
                    <div class="ratingLeft">
                        <ShowStar :rating="shop.rating" :starSize="24"></ShowStar>
                        <div class="ratingScore">{{ shop.rating }}</div>
                        <div class="ratingOrderPerMonth">月售{{shop.recent_order_num}}单</div>
                    </div>
                    <div class="ratingRigth">
                        <span>{{ shop.delivery_mode.text}}</span>
                    </div>
                </div>
                <div class="contentShopRightBottom">
                    <span class="startDistance">¥{{ shop.float_minimum_order_amount}}起送</span>
                    <span class="startSplitor">/</span>
                    <span class="startDeliveyFee">配送费约¥{{ shop.float_delivery_fee}}</span>
                </div>
            </div>
        </a>

    </li>
</template>
<script >

import { defineComponent } from 'vue'

import ShowStar from './ShowStar.vue'
export default defineComponent({
    name:'ShopList',
    setup() {
        return {
            
        }
    },
    components:{ ShowStar} ,
    props:['shop']
})    





</script>
<style scoped lang='stylus' rel='stylesheet/stylus' >

@import './ShopList'

                            

            

              
        



</style>