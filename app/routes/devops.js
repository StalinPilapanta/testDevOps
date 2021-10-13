const express = require('express')

const controller = require('../controllers/devops')
const router = express.Router()

const path = 'DevOps'

router.post(
    `/${path}`,
    controller.getData
)



module.exports = router