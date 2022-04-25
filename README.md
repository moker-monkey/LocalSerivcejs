# LocalServicejs
> 一个用于在web浏览器中模仿后端服务的插件，代码在mockjs的基础上进行了贴合场景的改动，一方面对代码进行了精简只保留了拦截部分，一方面能够在返回请求前能够通过异步阻塞请求，从而完全达到模拟类似后端服务的功能。

## 安装方法
```javascript
npm i localservicejs
//Typescript声明文件
npm i @types/localservicejs
```

## 使用方法
```javascript
import LocalService from 'LocalServicejs'

const url = 'http://localhost:8000/api/data'
const method = 'GET'
function service(custom){
    //此方法只能够同步，内部不能够异步阻塞，custom对象存储着自定义的请求数据
    //return为返回数据
    return {
        code:200,
        message:'this is a message'
    }
}
function beforeService(req,resolve,reject){
    // 此方法本身是一个promise，可以任意阻塞，req为请求的数据
    // resolve出的数据可以在custom找到
    resolve({
        code:200,
        message:'this is a message'
    })
}
LocalService.listener(url,method,service,beforeService)
```