# LocalServicejs
> 一个用于在web浏览器中模仿后端服务的插件，代码在mockjs的基础上进行了贴合场景的改动，一方面对代码进行了精简只保留了拦截部分，一方面能够在返回请求前能够通过异步阻塞请求，从而完全达到模拟类似后端服务的功能。

## 安装方法
```javascript
npm i localservicejs
```

## 基本用法
```javascript
import LocalService from 'LocalServicejs'

const url = 'http://localhost:8000/api/data'
const method = 'GET'
function service(req){
    //此方法只能够同步，内部不能够异步阻塞，custom对象存储着自定义的请求数据
    //return为返回数据
    return {
        code:200,
        message:'this is a message'
    }
}
function error_service(req){
    // 在beforeService中reject({code:401,data:{}})能够将data的值传入options中
    return {
        error:'this is a error message'
    }
}
function beforeSuccessService(req,resolve,reject){
    // 此方法本身是一个promise，可以任意阻塞，req为请求的数据
    // resolve出的数据可以在req.local_data找到
    resolve({
        code:200,
        message:'this is a message'
    })
}

function beforeErrorService(req,resolve,reject){
    // 这样的用法会调用error_service
    reject({
        status:401,
        message:'this is a message'
    })
}

LocalService.listener(url,method,service,error_service,beforeSuccessService)
LocalService.listener(url,method,service,beforeService)
```
其它设置
```javascript
Localservice.setup({
    timeout: '10-100', // 当service为一个对象时会timeout之后直接返回
    noError: false //设置为true后将永远不会调用error_service
})
```