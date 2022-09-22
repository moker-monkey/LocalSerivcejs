var assert = require('assert');
var LocalService = require('../src/index')
var axios = require('axios')

describe('LocalService', function () {
    it('listener', function (done) {
        function service(req) {
            assert(req).to.be.an('object')
            return {
                results: [
                    'test',
                    'test1'
                ]
            }
        }

        function errorService(req) {
            assert(req).to.be.an('object')
            return {
                message: 'this is a error'
            }
        }

        function beforeService(req, resolve, reject) {
            assert(req).to.be.an('object')
            resolve({
                msg: 'this is beforeService resolve'
            })
        }

        LocalService.listener('https://localhost:8888/api', 'GET', service)
        axios.post('https://localhost:8888/api', {
            meg: 'hello'
        }, {
            method: 'GET'
        }).then((res) => {
            assert(res.data.results).to.be.an('object')
            done()
        }).catch((res)=>{
            done()
        })
    })
})