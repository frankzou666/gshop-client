 <template>
  

    <span class="star24" :class="{'starFull24':item===1,'starHalf24':item>=0.5&&item<1,'starOff24':item<0.5}" v-if="starSize===24"  v-for="(item,index) in ratingArr" :key="index"></span>
    
    <span  class="star36" :class="{'starFull36':item===1,'starHalf36':item>=0.5&&item<1,'starOff36':item<0.5}" v-if="starSize===36"  v-for="(item,index) in ratingArr" :key="index"></span>



 </template>
 <script> 

   import { defineComponent } from 'vue';

   export default defineComponent({
    name:"ShowStar",
    setup(){

    },
    props:['rating','starSize'],
    computed:{
        ratingArr:function() {
            let ratingStr= this.rating
            let ratingArr = []
            //原来的小数点，比如4.1进行拆分,成4和1
            let ratingArrTmp = ratingStr.toString().split(".")
            if (Number(ratingArrTmp[0])>0) {
                for(var i=0;i<Number(ratingArrTmp[0]);i++) {
                    ratingArr.push(1)
                }
            }
            //如果最后一位不是0,NAN把最后一后也进去
            if (Number(ratingArrTmp[1])){
                ratingArr.push(Math.round(Number(ratingArrTmp[1])*100)/1000)
            }
            //看数组度是不是5位，如果没有5位，最后统统用0补齐
            if(ratingArr.length<5) {
                for (let j =0 ;j<5-ratingArr.length;j++){
                    ratingArr.push(0)
                }
            }
            return ratingArr
        }
    }


     
   })








 </script>
  <style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../../src/common/common'


.star24
     width:10* $vhSize
     height: 10 * $vhSize
     background-size: 10* $vhSize 10* $vhSize
     margin-left: 1 *$vhSize

.star36
     width:15* $vhSize
     height: 15 * $vhSize
     background-size: 15* $vhSize 15* $vhSize
     margin-left: 1 *$vhSize

.starFull24
    background-image: url('../../../assets/imgs/stars/star24_on@2x.png')
.starOff24
    background-image: url('../../../assets/imgs/stars/star24_off@2x.png')  
.starHalf24
     background-image: url('../../../assets/imgs/stars/star24_half@2x.png')     

.starFull36
    background-image: url('../../../assets/imgs/stars/star36_on@2x.png')
.starOff36
    background-image: url('../../../assets/imgs/stars/star36_off@2x.png')  
.starHalf36
     background-image: url('../../../assets/imgs/stars/star36_half@2x.png')         










 </style>