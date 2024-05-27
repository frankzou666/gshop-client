//间接更新,通过mutations

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,

} from './mutations-type'

import {reqFoodCategorys,
        reqShopList,
        reqPosition,
        reqGetUserInfo,
        reqShopInfo
    } from '../api/index'

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

    setUserInfo({commit,userInfo}){
        commit(RECEIVE_USERINFO,{userInfo:userInfo})
    },

    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqGetUserInfo()
        if (result.code===0) {
            const userInfo = result.data
            commit(RECEIVE_USERINFO,{userInfo:userInfo})
        }
    },

    //异步退出
    async logout({commit}){
        console.log('logout from store')
    },

    //获取商家列表
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if (result.code===0) {
            const Info = result.data
            commit(RECEIVE_INFO,{Info:Info})
        }
    },

    //获取商品列表
    async getShopGoods({commit}){
        const result = await reqShopGoods()
        if (result.code===0) {
            const goods = result.data
            commit(RECEIVE_GOODS,{goods:goods})
        }
    },

    //获取商品评价列表
    async getShopRatings({commit}){
        const result = await reqShopGoods()
        if (result.code===0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings:ratings})
        }
    },

}