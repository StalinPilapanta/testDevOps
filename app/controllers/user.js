const jwt = require('jsonwebtoken')

exports.getData = (req, res) => {
    const user = {
        message: "This is a test",
        to: "Juan Perez",
        from: "Rita Asturia",
        timeToLifeSec:"45"
    }

    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
}