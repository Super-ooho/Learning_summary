const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')
const joi = require('joi')
const expressJWT = require('express-jwt')
const config = require('./config')
const userinfoRouter = require('./router/userinfo')
const artcate = require('./router/artcate')

// 创建一个服务器应用
const app = express()
// 将core注册为全局中间件
app.use(cors())
// 配置解析application/x-www-form-urlencoded（表单数据）的中间件
app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    res.cc = (err, status=1)=>{
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})


// 定义解析token中间件
app.use(expressJWT({secret: config.jwtSecretKey}).unless({ path: [/^\/api\//]}))

// 定义错误级别的中间件
app.use((err, req, res, next)=>{
    // 用户名或密码不合法的错误
    if(err instanceof joi.ValidationError) return res.cc(err.message)
    // token身份认证失败的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc(err)
})

app.use('/api', userRouter)
app.use('/my', userinfoRouter)
app.use('/artcate', artcate)


app.listen(3007, ()=>{
    console.log('app server running at http://127.0.0.1:3007')
})