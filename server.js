const express = require('express')

// server
const app = express()
const port = 3001

// component
const jwt = require('jsonwebtoken')
const userRouters = require('./app/routes/user')

// urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(userRouters)





// validation jwt
app.post("/DevOps", verifyToken, (req, res) =>{
    
    jwt.verify(req.token, 'secretkey', (error, authData)=> {
        if(error){
            res.sendStatus(403)
        }else{
            res.json(
                {
                    message : `Hello ${req.body.to} your message will be send`
                }
            )
        }
    })
    
})

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    
    const bearerHeader = req.headers['x-jwt-kwy'];
    
    if(typeof bearerHeader !== 'undefined'){
        //const bearertoken = bearerHeader.split(" ")[1]
        const bearertoken = bearerHeader
        req.token = bearertoken;
        next()
    }else{
        res.sendStatus(403)
    }
}

app.listen(port,()=>{
    console.log("La consola esta en linea")
})

module.exports = app