//间接更新,通过mutations

import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-type'

import {reqFoodCategorys,reqShopList,reqPosition} from '../api/index'

export default {
    //异步获取地址
    async getAddress({commit,state}){
        const geohash= state.latitude+','+state.longitude
        let result = await reqPosition(geohash)
        if (result.code==0) {
            commit(RECEIVE_ADDRESS,{address:result.data})
        }
    },

    //异步获取商品列表

    async getFoodCategorys({commit,state}){
        let result = await reqFoodCategorys()
        if (result.code==0) {
            commit(RECEIVE_CATEGORYS,{categorys:result.data})
        }
    },


    //异步获取商家

    async getShoplist({commit,state}){
    
        let result = await reqShopList(state.latitude,state.longitude)
        if (result.code==0) {
            commit(RECEIVE_SHOPS,{shops:result.data})
        }
    },

  
}