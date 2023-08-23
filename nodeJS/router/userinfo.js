// 导入express
const express = require('express')
// 导入表单验证中间件
const expressJoi = require('@escook/express-joi')
// 导入验证规则
const { update_userinfo_schema, update_userpwd_schema, update_userpic_schema } = require('../schema/user')


// 创建路由对象
const router = express.Router()
// 导入用户信息相关 handler 方法
const getUserinfoHandler = require('../router_handler/userinfo')
// 挂载 查 用户信息的路由
router.get('/userinfo', getUserinfoHandler.getUserinfo)
// 挂载 改 用户信息的路由
router.post('/userinfo', expressJoi(update_userinfo_schema), getUserinfoHandler.updateUserinfo)
// 挂载 改 用户密码的路由
router.post('/updatepwd', expressJoi(update_userpwd_schema), getUserinfoHandler.updateUserpwd)
// 挂载 改 用户头像的路由
router.post('/updatepic', expressJoi(update_userpic_schema), getUserinfoHandler.updateUserpic)


module.exports = router