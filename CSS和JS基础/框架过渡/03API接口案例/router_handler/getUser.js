import db from '../db/index.js'
export async function getAllUser(req, res) {
    // 使用try/catch捕获异常并进行异常处理
    try {
        const [rows] = await db.query('select id,username,nickname from ev_users')
        // 数据发送给客户端
        res.send({
            status: 0,
            message: '获取用户列表成功',
            data: rows
        })
    }
    catch (err) {
        res.send({
            status: 1,
            message: '获取用户数据失败',
            desc: err.message

        })
    }

}