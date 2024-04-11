
import ajax  from "./ajax";

const BASE_URL="http://localhost:4000"


const API= {
    //请求位置
    POSITION:'/api/position',
    //食品分类
    FOODTYPES :'/api/index_category',
    //获取商铺列表
    SHOPLIST :'/api/shops',
    //验证码
    CAPTCHA:'/api/captcha'
}


//请求位置API
export const reqPosition=(data)=>{ return ajax(BASE_URL+API.POSITION+'/'+data,'get',{})}

//获取食品分类
export const reqFoodTypes=(data)=>{ return ajax(BASE_URL+API.FOODTYPES,'get',{})}

//根据经纬度获取商铺列表
export const reqShopList = (longitude,latitude)=>{ return ajax(BASE_URL+API.SHOPLIST,'get',{longitude,latitude})}

//请求验证码
export const reqCaptcha=()=>{ return ajax(BASE_URL+API.CAPTCHA,'get',{})}