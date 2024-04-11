<template>
    <li class="contentItem">
        <a href="script" class="contentShop">
            <div class="contentShopLeft"><img src="../../../assets/imgs/shop/1.jpg" class="contentShop-l" alt="">
            </div>
            <div class="contentShopRight">
                <div class="contentShopRightTop">
                    <h4 class="shopTitle ellipsis">锄禾日当午，汗滴禾下土</h4>
                    <ul class="shopTag">
                        <li class="shopTagItem"><span>保</span></li>
                        <li class="shopTagItem"><span>准</span></li>
                        <li class="shopTagItem"><span>票</span></li>
                    </ul>
                </div>
                <div class="contentShopRightMiddle">
                    <div class="ratingLeft">
                        <span class="star starFull"></span>
                        <span class="star starFull"></span>
                        <span class="star starFull"></span>
                        <span class="star starHalf"></span>
                        <span class="star starOff"></span>
                        <div class="ratingScore">3.6</div>
                        <div class="ratingOrderPerMonth">月售106单</div>
                    </div>
                    <div class="ratingRigth">
                        <span>硅谷专卖</span>
                    </div>
                </div>
                <div class="contentShopRightBottom">
                    <span class="startDistance">¥20起送</span>
                    <span class="startSplitor">/</span>
                    <span class="startDeliveyFee">配送费约¥5</span>
                </div>
            </div>
        </a>

    </li>
</template>
<script >

import { defineComponent } from 'vue'
export default defineComponent({
    name:'ShopList',
    setup() {
        return {
            
        }
    },
})    





</script>
<style scoped lang='stylus' rel='stylesheet/stylus' >

@import './ShopList'

                            

            

              
        



</style>