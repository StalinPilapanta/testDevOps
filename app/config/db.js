const mongoose = require('mongoose')

const DB_URI = `mongodb://127.0.0.1:27017/my_app_node`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI, 
            {
                keepAlive: true,
                useNewUrlParser: true,
                userUnifiedTopology: true
            }, 
            (err) => {
                if(err){
                    console.log('DB: ERROR !!');
                    
                }else{
                    console.log('Conexion Correcta!!')
                }
            }
        )
    }

    connect();
}