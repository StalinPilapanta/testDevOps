const request = require('supertest')
const {app, verifyToken} = require('../server')

describe('GET /user', ()=>{
    it('Should return get a user token', async ()=> {
        const response = await request(app).get('/user')
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
    })
})

describe('POST /DevOps', ()=>{
    it('Should return get a message DevOps', async ()=> {

        let message = {
            "message" : "This is a test",
            "to": "Juan Perez",
            "from": "Rita Asturia",
            "timeToLifeSec" : 45
        }

        const response = await request(app).post('/DevOps').send(message)
        expect(response.status).toBe(403)
        expect(response.body.body).not.toBeNull()
    })
})