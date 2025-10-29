const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const JWT_SECRET = 'your_super_secret_key_for_jwt_signing'; 

// La API Key Requerida
const REQUIRED_API_KEY = '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c';

const checkApiKey = (req, res, next) => {
    
    const apiKey = req.headers['x-parse-rest-api-key'];

    if (!apiKey || apiKey !== REQUIRED_API_KEY) {
        
        return res.status(401).send('ERROR: Unauthorized - Invalid or missing API Key');
    }
    next();
};

app.post('/DevOps', checkApiKey, (req, res) => {
    const { message, to, from, timeToLifeSec } = req.body;

    if (!to || typeof to !== 'string') {
        return res.status(400).json({ error: 'ERROR: Missing or invalid "to" field in request body.' });
    }

    const transactionPayload = {
        to,
        from,
        message,
        timestamp: Date.now(),
    };

    const uniqueJwt = jwt.sign(transactionPayload, JWT_SECRET, {
        expiresIn: timeToLifeSec || '1h'
    });

    res.set('X-Generated-JWT', uniqueJwt);

    res.json({
        message: `Hello ${to} your message will be sent`
    });
});

['get', 'put', 'delete', 'patch'].forEach(method => {
    app[method]('/DevOps', (req, res) => {
        res.status(405).send('ERROR: Method Not Allowed');
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Microservicio DevOps escuchando en el puerto ${PORT}`);
    console.log(`API Key requerida: ${REQUIRED_API_KEY}`);
});