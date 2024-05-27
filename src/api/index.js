
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
    CAPTCHA:'/api/captcha',
    //用户名和密码
    LOGINPWD:'/api/login_pwd',
    //获取短们验证码
    SENDCODE:'/api/sendcode',
    //手机号验证码登录
    LOGINSMS:'/api/login_sms',
    //获取用户信息
    USERINFO:'/api/userinfo',
    //退出
    LOGOUT:'/api/logout',
    //查找商铺列表
    SEARCHSHOPS:'/api/search_shops',

 

}


//请求位置API
export const reqPosition=(data)=>{ return ajax(BASE_URL+API.POSITION+'/'+data,'get',{})}

//获取食品分类
export const reqFoodCategorys=(data)=>{ return ajax(BASE_URL+API.FOODTYPES,'get',{})}

//根据经纬度获取商铺列表
export const reqShopList = (longitude,latitude)=>{ return ajax(BASE_URL+API.SHOPLIST,'get',{longitude,latitude})}

//请求验证码
export const reqCaptcha=()=>{ return ajax(BASE_URL+API.CAPTCHA,'get',{})}

//用户名和密码登录
export const reqLoginPwd=({name,pwd,captcha})=>{ return ajax(BASE_URL+API.LOGINPWD,'post',{name,pwd,captcha})}

//发送短信验证码
export const reqSendSms=(phone)=>{ return ajax(BASE_URL+API.SENDCODE,'get',{phone})}

//短信登录
export const reqLoginSms=({phone,code})=>{ return ajax(BASE_URL+API.LOGINSMS,'post',{phone,code})}

//请求用户信息
export const reqGetUserInfo=()=>{ return ajax(BASE_URL+API.USERINFO,'get',{})}

//退出
export const reqLogout=()=>{ return ajax(BASE_URL+API.LOGOUT,'post',{})}


//根据经纬度查找列表商铺列表
export const reqSearchShop = (keyworkd,geohash)=>{ return ajax(BASE_URL+API.SEARCHSHOPS,'get',{keyworkd,geohash})}


//获取用户信息
export const reqUserInfo =()=>{ return ajax(BASE_URL+API.LOGOUT,'post',{})}


//获取商家信息
export const reqShopInfo=()=>ajax("/info",'get',{})


//获取商家评价数组
export const reqShopRatings=()=>ajax.get("/ratings",'get',{})

//获取商家
export const reqShopGoods=()=>ajax.get("/goods",'get',{})