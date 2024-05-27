 <template>
  <div class="Pprofile">
    <!-- <div class="profileTop">
       <h2>我的</h2>
    </div> -->

    <HeaderTop title="我的" />

    <div class="profileNumber">
       <a  class="profileLink" @click="goTo('/login')">
         <div class="profileImage">
           <i class="fa fa-circle-user"></i>
         </div>
         <div class="profileLogReg">
           <p class="profileLogRegp">{{userInfo?userInfo._id:'登录/注册'}}</p>
          
            
            <div class="profileLogRegNoPhone">
              <i class="fa fa-mobile-retro"></i>
              <span>{{userInfo?userInfo.phone:'暂无绑定手机号'}}</span>
            </div>
        </div>
  
         <div class="profileArrow"><i class="fa fa-chevron-right"></i></div>
       </a>
    </div>

    <div class="profileData">
       <ul class="profileDataList">
          <li class="item profileDataListBalance">
              <div class="profileDataListBalanceTop">
                <span class="profileDataListBalanceTotalP">0.00</span>
                <span class="profileDataListBalanceTotalSpan profileDataListItem">元</span>
              </div>
              <div class="profileDataListBalanceButtom">
                <span class="profileDataListBalanceTotalSpan profileDataListItem">我的余额</span>
              </div>
          </li>
          <li class="item profileDataListPromotion">
              <div class="profileDataListPromotionTop">
                <span class="profileDataListPromotionTotalP">0</span>
                <span class="profileDataListPromotionTotalSpan profileDataListItem">个</span>
              </div>
              <div class="profileDataListPromotionButtom">
                <span class="profileDataListBalanceTotalSpan profileDataListItem">我的优惠</span>
              </div>
          </li>
          <li class="item profileDataListScore">
            <div class="profileDataListScoreTop">
                <span class="profileDataListScoreTotalP">0</span>
                <span class="profileDataListScoreTotalSpan profileDataListItem">分</span>
              </div>
              <div class="profileDataListScoreButtom">
                <span class="profileDataListBalanceTotalSpan profileDataListItem">我的积分</span>
              </div>
          </li>
       </ul>
    </div>

    <div class="profileFun">
       <ul class="profileFunList">
          <li class="profileFunListItem">
            <a href="" class="profileFunListItemA">
              <div class="profileFunListItemALeft">
                 <i class="fa fa-folder"></i>
              </div>
              <div class="profileFunListItemARight">
                 <div class="profileFunListItemARightLeft">我的订单</div>
                 <div class="profileFunListItemARightRight"><i class="fa fa-chevron-right"></i></div>
              </div>
            </a>
          </li>
          <li class="profileFunListItem">
            <a href="" class="profileFunListItemA">
              <div class="profileFunListItemALeft">
                 <i class="fa fa-building"></i>
              </div>
              <div class="profileFunListItemARight">
                 <div class="profileFunListItemARightLeft">积分商城</div>
                 <div class="profileFunListItemARightRight"><i class="fa fa-chevron-right"></i></div>
              </div>
            </a>
          </li>

          <li class="profileFunListItem">
            <a href="" class="profileFunListItemA">
              <div class="profileFunListItemALeft">
                 <i class="fa fa-crown"></i>
              </div>
              <div class="profileFunListItemARight profileFunListItemARightNoBorder">
                 <div class="profileFunListItemARightLeft ">外卖会员卡</div>
                 <div class="profileFunListItemARightRight"><i class="fa fa-chevron-right"></i></div>
              </div>
            </a>
          </li>

          <li class="profileFunListItem">
            <a href="" class="profileFunListItemA">
              <div class="profileFunListItemALeft">
                 <i class="fa fa-info"></i>
              </div>
              <div class="profileFunListItemARight">
                 <div class="profileFunListItemARightLeft">服务中心</div>
                 <div class="profileFunListItemARightRight"><i class="fa fa-chevron-right"></i></div>
              </div>
            </a>
          </li>
          <van-button type="danger" size="large">退出</van-button>

       </ul>

      
    </div>



  </div>
 </template>
 <script>

  import {defineComponent} from 'vue'
  import { mapState } from 'vuex';

  
  export default defineComponent({
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      goTo:function(path){
        this.$router.push(path)
      }
    },
    //logout
    logout:function(){
      MessageBox.confirm('config logout?')

    }
  })






 </script>
  <style lang='stylus' rel='stylesheet/stylus' scoped>
   @import './Profile'









 </style>