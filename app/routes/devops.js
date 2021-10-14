const express = require('express')

const controller = require('../controllers/devops')
const router = express.Router()

const path = 'test'

router.post(
    `/${path}`,
    controller.getData
)



module.exports = router