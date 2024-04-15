
// 直接更新state的方法对像

import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-type'

export default {

    [RECEIVE_ADDRESS] (state,{address}) {
        state.address=address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}) {
            // //每一组放8个
            // var category2ArrTemp = []
            // let newCategory = Math.round(categorys.length/8)
            // for (var j=0;j<newCategory;j++) {
            //     let temparry=[]
            //     for (var i=0;i<8;i++) {
            //       temparry.push(categorys[i+j*(8)])
            //    }
            //    category2ArrTemp.push(temparry)
            // }
        let minArr=[]    
        categorys.forEach(item => {
            minArr.push(item)
            if (minArr.length===8) {
                state.categorys.push(minArr)
                minArr =[]
            }
        });
        if (minArr.length>0){
            state.categorys.push(minArr)

        }
        //state.categorys=category2ArrTemp
    },
    [RECEIVE_SHOPS] (state,{shops}) {
        state.shops=shops
    }
}