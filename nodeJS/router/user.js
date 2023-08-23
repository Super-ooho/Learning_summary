const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')

const { reg_login_schema } = require('../schema/user')

// expressJoi是验证局部中间件
router.post('/reguser', expressJoi(reg_login_schema),userHandler.reguser)

router.post('/login', expressJoi(reg_login_schema), userHandler.login)

module.exports = router