require.config({
    paths: {
        LocalService: '../dist/LocalService',
        axios: '../node_modules/axios/dist/axios'
    }
})

// require(['test'],function(mock){
//     mock()
// })

// 加载 Mock
require(['LocalService', 'axios'], function (LocalService, axios) {
    // 使用 Mock
    LocalService.listener("https://localhost:8888/api", "POST", (req) => {
        console.log('finally',req)
        return {
            code: 200,
            message: 'hello world'
        }
    }, (req) => {
        console.log('btn', req)
            // reject 是一个option设置，status为浏览器返回的状态码，response内为真实返回的数据
            return{
                    msg: 'this is a error'
            }
    },(req, resolve, reject) => {
        console.log('btn', req)
        setTimeout(() => {
            // reject 是一个option设置，status为浏览器返回的状态码，response内为真实返回的数据
            reject({
                status: 400,
                response: {
                    msg: 'hello'
                }
            })
        }, 1000);
    })

    axios.post('https://localhost:8888/api', {
        meg: 'hello'
    }, {
        method: 'POST'
    }).then((res) => {
        console.log('200', res)
        document.querySelector('.message').innerHTML += `<div>${JSON.parse(res.data).message}</div>`
    }).catch(error => {
        console.log(error.response)
    })

    document.querySelector('.btn').addEventListener('click', () => {
        axios.post('https://localhost:8888/api', {
            meg: 'hello'
        }, {
            method: 'POST'
        }).then((res) => {
            console.log('200', res)
            document.querySelector('.message').innerHTML += `<div>${JSON.parse(res.data).message}</div>`
        })
    })
})
// 创建XHR对象