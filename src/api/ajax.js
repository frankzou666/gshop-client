
import axios from 'axios'

//在axio配置拦截器，统一处理
axios.interceptors.request.use((config)=>{
  return config;
})

axios.interceptors.response.use(
    (response) =>{ return response},
    (error) =>{console.log(error.message)},
)


//ajax
const ajax= function(url,type,data={}){
    return new Promise((resolve,reject)=>{
        let promise;
        
        if (type==='get') {
            let dataStr=''
            Object.keys(data).forEach(key=>{
                dataStr=dataStr + key+'='+data[key] + '&'
            })

            if (dataStr!='') {
                //拼且最终请求参数，且最后一个 ‘&'不需要
                url = url+dataStr.substring(0,dataStr.lastIndexOf('&'))
            }
            promise = axios.get(url,{params:data})
        };
        if (type==='post') {
            promise = axios.get(post,data)
        };

        promise.then((response)=>{
           resolve(response.data)
        }).catch((error)=>{
           console.log(error.message)
        })

    })

}

export default ajax