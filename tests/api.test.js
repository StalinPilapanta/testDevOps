const request = require('supertest')
const app = require('../server')
const user = require('../app/routes/user')


/**
 * Testing get token 
 */

describe('GET /user', () => {
    it('respond with json containing a token user', (done) => {
        request(user)
            .get('user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done());
    })
})


describe('POST /DevOps', () => {
    it('respond with json containing path DevOps', (done) => {
        request(app)
            .post('/DevOps')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done());
    })

    
    
})
