const express = require('express')
const app = express()
const port = 3001
const initDB = require('./app/config/db')

const jwt = require('jsonwebtoken')


const userRouters = require('./app/routes/user')
const devopsRouters = require('./app/routes/devops')

app.use(userRouters)
app.use(devopsRouters)


app.post("/posts", verifyToken, (req, res) =>{
    
    jwt.verify(req.token, 'secretkey', (error, authData)=> {
        if(error){
            res.sendStatus(403)
        }else{
            res.json(
                {
                    message:  "post fue creado",
                    authData
                }
            )
        }
    })
    res.json({
        message: "Hola Peter fue creado"
    })
})

// Authorization: Bearer <tiken>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearertoken = bearerHeader.split(" ")[1]
        req.token = bearertoken;
        next()
    }else{
        res.sendStatus(403)
    }
}

app.listen(port,()=>{
    console.log("La consola esta en linea")
})

//initDB()