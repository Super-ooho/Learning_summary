const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.reguser = (req, res) => {
    const userinfo = req.body

    const sql1 = 'select * from ev_users where username=?'
    db.query(sql1, [userinfo.username], (err, results) => {
        if (err) return res.cc(err)

        if (results.length > 0) {
            return res.cc('用户名已被占用')
        }
        // 成功
        // 对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo.password)

        // 将注册用户插入数据表
        const sql2 = 'insert into ev_users set ?'
        db.query(sql2, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('注册失败，请重新注册')
            console.log(userinfo.password)
            res.cc('注册成功')
        })
    })
}

exports.login = (req, res) => {
    const userinfo = req.body
    // 定义sql语句
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) {
            return res.cc('登录失败！')
        }
        // 比较密码是否错误
        const pswResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!pswResult) return res.cc('密码错误！请重新输入密码')

        // 返回客户端token
        const user = { ...results[0], password: '', user_pic: '' }
        const token = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + token
        })
    })

}