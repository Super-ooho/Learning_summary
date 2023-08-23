// 从express包里导入express方法
import express from 'express'
import userRouter from './router/user_router.js'
// 调用方法，返回值是一个服务器实例
const app = express()
app.listen(80, () => {
    console.log("服务器运行在http://127.0.0.1")
})
app.use('/api', userRouter)

