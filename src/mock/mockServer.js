/*
*  使用mockServer.js
*      
*/

import Mock from 'mockjs'

import data from './data.json'

//返回商品的接口，接口，和返回的数据，mock只返回正常的数据
Mock.mock('/goods',{code:0,data:data.goods})

Mock.mock('/ratings',{code:0,data:data.ratings})

Mock.mock('/info',{code:0,data:data.info})

