// mocha,describe,it,chai为全局变量
const expect = chai.expect

describe('GET method', () => {
    before(() => {
        LocalService.listener(new RegExp('http://localhost:8080/api/test/success.*'), 'GET', (req, resolve, reject) => {
            console.log('success req', req)
            resolve({
                status: 201,
                response: {
                    msg: 'this message is resolve'
                }
            })
        })

        LocalService.listener('http://localhost:8080/api/test/error', 'GET', (req, resolve, reject) => {
            reject({
                status: 401,
                response: {
                    message: 'this message is not'
                }
            })
        })
    })
    it('success', (down) => {
        axios.get('http://localhost:8080/api/test/success/', {
            params: {
                msg: 'success'
            }
        }).then((res) => {
            try {
                console.log(res)
                expect(res.data).to.be.deep.include({
                    msg: 'this message is resolve'
                })
                down()
            } catch (error) {
                down(error)
            }
        })
    })
    it('error', (down) => {
        axios.get('http://localhost:8080/api/test/error').catch((err) => {
            console.log(err.response)
            try {
                expect(err.response.data).to.be.deep.include({
                    message: 'this message is not'
                })
                down()
            } catch (error) {
                down(error)
            }
        })
    })
})