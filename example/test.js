require.config({
    paths: {
        LocalService: '../dist/LocalService'
    }
})

// require(['test'],function(mock){
//     mock()
// })

// 加载 Mock
require(['LocalService'], function (LocalService) {
    // 使用 Mock
    console.log(LocalService)
    var data = LocalService.listener("https://localhost:8888/api","POST",(req)=>{
    console.log('req',req)
    return {
        code:200,
        message:'hello world'
    }
    },(req,resolve,reject)=>{
        console.log('btn',req)
        setTimeout(() => {
            resolve(req) 
        }, 5000);
        
    })
    
    // 输出结果
    var xhr = new XMLHttpRequest();
    // 调用open函数
    xhr.open("PUT",
        "https://localhost:8888/api")
    // 调用send函数,发起请求
    xhr.send()
    // xhr.custom.flag.then((resolve)=>{
    //     console.log(resolve)
    //     resolve('ok')
    // })
    // 监听onreadystatechange事件
    xhr.onreadystatechange = function () {
        //判断服务器返回的状态信息是否全等于4且http响应状态码是否等于200；
        if (xhr.readyState === 4 && xhr.status === 200) {
            //打印JSON字符串形式的服务器响应数据；
            console.log(xhr);
            document.querySelector('.message').innerHTML += `<div>${JSON.parse(xhr.response).message}</div>`
            //检测数据类型返回string
        }
    }
    document.querySelector('.btn').addEventListener('click',()=>{
        var data = LocalService.listener("https://localhost:8888/api","POST",(req)=>{
        console.log('req',req)
        return {
            code:200,
            message:'hello world'
        }
        })
        
        // 输出结果
        var xhr = new XMLHttpRequest();
        // 调用open函数
        xhr.open("POST",
            "https://localhost:8888/api")
        // 调用send函数,发起请求
        xhr.send()
        // xhr.custom.flag.then((resolve)=>{
        //     console.log(resolve)
        //     resolve('ok')
        // })
        // 监听onreadystatechange事件
        xhr.onreadystatechange = function () {
            //判断服务器返回的状态信息是否全等于4且http响应状态码是否等于200；
            if (xhr.readyState === 4 && xhr.status === 200) {
                //打印JSON字符串形式的服务器响应数据；
                console.log(xhr);
                document.querySelector('.message').innerHTML += `button message:<div>${JSON.parse(xhr.response).message}</div>`
                //检测数据类型返回string
            }
        }
    })
})
// 创建XHR对象
