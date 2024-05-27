<template>
    <div class="PMsite">
       

        <HeaderTop :title="address.name">
            <!-- slot用法 放到组件的slot-->
            <template v-slot:searchSlot>
                <div class="search"><i class="fa fa-location"></i></div>
            </template>
            <template v-slot:rightSlot>
                <div class="loginAndRegister" slot="rightSlot"  @click="goTo('/login')">{{ userInfo?userInfo._id:'登录｜注册' }}</div>
            </template>
        </HeaderTop>
      
        <!-- 导航-->
        <div class="nav swiper">

            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true"
                :pagination="{ clickable: true }" :autoplay="{ delay: 2, disableOnInteraction: true }"
                :navigation="true" :modules="modules">

                <swiper-slide v-for="(category2Arr_1,index)  in categorys" :key="index">
                    <ul class="navList">
                        <li class="item swiper-slide"  v-for="(item,index)  in category2Arr_1" :key="index">
                            <a href="javascript:;" class="itemA">
                                 <img :src="'./imgs/nav/'+(index+1)+'.jpg'" alt="">
                                 
                                 <!-- <img src="../../assets/imgs/nav/1.jpg" alt="">   -->
                                <span>{{ item.title}}</span>
                            </a>
                        </li>
                    </ul>

                </swiper-slide>

                <!-- <swiper-slide>
                    <ul class="navList">
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/1.jpg" alt="">
                                <span>甜品饮品</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/3.jpg" alt="">
                                <span>美食</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/2.jpg" alt="">
                                <span>新店特惠</span>
                            </a>
                        </li>
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/4.jpg" alt="">
                                <span>简餐</span>
                            </a>
                        </li>
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/1.jpg" alt="">
                                <span>甜品饮品</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/3.jpg" alt="">
                                <span>美食</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/2.jpg" alt="">
                                <span>新店特惠</span>
                            </a>
                        </li>
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/4.jpg" alt="">
                                <span>简餐</span>
                            </a>
                        </li>

                    </ul>

                </swiper-slide>

                <swiper-slide>
                    <ul class="navList">
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/1.jpg" alt="">
                                <span>甜品饮品1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/3.jpg" alt="">
                                <span>美食1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/2.jpg" alt="">
                                <span>新店特惠1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/4.jpg" alt="">
                                <span>简餐1</span>
                            </a>
                        </li>

                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/1.jpg" alt="">
                                <span>甜品饮品1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/3.jpg" alt="">
                                <span>美食1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide"><a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/2.jpg" alt="">
                                <span>新店特惠1</span>
                            </a>
                        </li>
                        <li class="item swiper-slide">
                            <a href="javascript:;" class="itemA">
                                <img src="../../assets/imgs/nav/4.jpg" alt="">
                                <span>简餐1</span>
                            </a>
                        </li>

                    </ul>


                </swiper-slide> -->




            </swiper>




            <!-- <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/1.jpg" alt="">
                    <span>甜品饮品</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/3.jpg" alt="">
                    <span>美食</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/4.jpg" alt="">
                    <span>简餐</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/5.jpg" alt="">
                    <span>新店特惠</span>
                </a>
            </li>
            <li class="item swiper-slide swiper-pagination">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/6.jpg" alt="">
                    <span>准时达</span>
                </a>
            </li>
            <li class="item swiper-slide swiper-pagination">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/1.jpg" alt="">
                    <span>预订早餐</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/1.jpg" alt="">
                    <span>土豪推荐</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/1.jpg" alt="">
                    <span>甜品饮品</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/3.jpg" alt="">
                    <span>美食</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/4.jpg" alt="">
                    <span>简餐</span>
                </a>
            </li>
            <li class="item swiper-slide">
                <a href="javascript:;" class="itemA">
                    <img src="../../assets/imgs/nav/5.jpg" alt="">
                    <span>新店特惠</span>
                </a>
            </li> -->


            <!-- </ul> -->


        </div>

   

        <!-- 主体-->
        <div class="content">
            <div class="contentHeader">
                <i class="fa fa-folder"></i>
                <span>附近商家</span>
            </div>
            <div class="contentMain">
                <ul class="contentList">
                    <!-- <li class="contentItem">
                        <a href="script" class="contentShop">
                            <div class="contentShopLeft"><img src="../../assets/imgs/shop/1.jpg" class="contentShop-l"
                                    alt="">
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
                    <li class="contentItem">
                        <a href="script" class="contentShop">
                            <div class="contentShopLeft"><img src="../../assets/imgs/shop/2.jpg" class="contentShop-l"
                                    alt="">
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
                    <li class="contentItem">
                        <a href="script" class="contentShop">
                            <div class="contentShopLeft"><img src="../../assets/imgs/shop/3.jpg" class="contentShop-l"
                                    alt="">
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
                    <li class="contentItem">
                        <a href="script" class="contentShop">
                            <div class="contentShopLeft"><img src="../../assets/imgs/shop/1.jpg" class="contentShop-l"
                                    alt="">
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
                    <li class="contentItem">
                        <a href="script" class="contentShop">
                            <div class="contentShopLeft"><img src="../../assets/imgs/shop/1.jpg" class="contentShop-l"
                                    alt="">
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

                    </li> -->
                 
                    <ShopList v-for="(shop,index) in shops" :key="shop.id" :shop="shop" />
                  
                
                </ul>
            </div>


        </div>




    
    </div>
</template>
<script>
import { defineComponent ,ref} from 'vue'
import {mapState} from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import "swiper/css";
import 'swiper/css/pagination'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import ShopList from './ShopList/ShopList.vue'
import {reqPosition} from '@/api/index.js'

export default defineComponent({
    setup() {
        let latitude = ref()
        let longitude =ref()
        let location = ref('')
        let category2Arr= ref()
        return {
            modules: [Navigation, Pagination,Scrollbar],latitude,longitude,location
        }
    },
    mounted() {
        //获取当前的location
        //this.getArry2ForCategorys()
        this.getGetLocation()
        this.getPosition(this.latitude+','+this.longitude)
        

        
    },
    computed:{
        ...mapState(['address','categorys','shops','userInfo'])

    },
    components: { SwiperSlide,ShopList },
    methods:{
        //获取地址
        getPosition:async function(location) {
            let result = await reqPosition(location);
            if (result.code===0) {
               this.location=result.data.name
            }
        },    
        getArry2ForCategorys:function() {
            let categoryArr= this.$store.state.categorys;
            //每一组放8个
            var category2ArrTemp = []
            let newCategory = Math.round(categoryArr.length/8)
            for (var j=0;j<newCategory;j++) {
                let temparry=[]
                for (var i=0;i<8;i++) {
                  temparry.push(categoryArr[i+j*(8)])
               }
               console.log(temparry)
               category2ArrTemp.push(temparry)
            }
            this.category2Arr = category2ArrTemp
            console.log(this.category2Arr)

        },
        //获取当前getlocation
        getGetLocation:function() {
        //   if (navigator.geolocation) {
        //      navigator.geolocation.getCurrentPosition(
        //       (position)=>{  this.latitude = position.coords.latitude; this.longitude = position.coords.longitude;}, 
        //       (error)=>{console.log(error)});
        //   }

          //如果获取地址失败，则用默认地址
          if (this.latitude ===undefined) {
            this.latitude ='40.10038'
            this.longitude ='116.3686'
          } 
        } ,
        goTo:function() {
            this.$router.push("/login")
        }
          
    },
    watch:{
        //监视categorys的属性
        address(value) {
        }
    }

})









</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../Msite'


 </style>