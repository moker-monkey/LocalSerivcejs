
// mocha,describe,it,chai为全局变量
const expect = chai.expect
console.log(LocalService)

describe('GET method', () => {
    before(() => {
        LocalService.listener('http://localhost:8080/api/test/success', 'GET', (req) => {
            return {
                code: 200,
                message: 'success'
            }
        },  (req, resolve, reject) => {
            resolve({
                code: 200,
                message: 'this message is resolve'
            })
        })

        LocalService.listener('http://localhost:8080/api/test/error', 'GET', (req) => {
            return req
        }, (err) => {
            console.log('err service',err)
            return {
                code: 400,
                message: 'error'
            }
        }, (req, resolve, reject) => {
            reject({
                code: 400,
                message: 'this message is not'
            })
        })
    })
    it('success', (down) => {
        axios.get('http://localhost:8080/api/test/success').then((res) => {
            try {
                expect(res.data).to.be.deep.include({
                    code: 200,
                    message: 'success'
                })
                down()
            } catch (error) {
                down(error)
            }
        })
    })
    it('error', (down) => {
        axios.get('http://localhost:8080/api/test/error').catch((err) => {
            try {
                expect(err.response.data).to.be.deep.include({
                    code: 400,
                    message: 'error'
                })
                down()
            } catch (error) {
                down(error)
            }
        })
    })
})