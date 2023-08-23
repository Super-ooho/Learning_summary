const db = require('../db/index')
const bcrypt = require('bcryptjs')

exports.getUserinfo = (req, res)=>{
    // console.log(req)
    const sql = 'select  id, username, nickname, email, user_pic from ev_users where id=?'
    db.query(sql, req.user.id, (err, results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('获取用户信息失败')
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
}

exports.updateUserinfo = (req, res)=>{
    // console.log(req)
    // res.send('更改成功')
    const sql1 = 'update ev_users set ? where id=?'
    db.query(sql1, [req.body, req.body.id], (err, results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows != 1) return res.cc('修改用户信息失败')
        
        res.cc('修改信息成功', 0)
    })
}

exports.updateUserpwd = (req, res)=>{
    console.log(req)
    const sql1 = 'select * from ev_users where id=?'
    db.query(sql1, req.user.id, (err, results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('该用户不存在')
        
        // 判断旧密码是否正确(需要导入密码加密的库bcryptjs)
        const compareResult = bcrypt.compareSync(req.body.oldpwd, results[0].password)
        if(!compareResult) return res.cc('旧密码错误!请重新输入')

        // 将新密码更改到数据库中
        const newpwd = bcrypt.hashSync(req.body.newpwd)
        const sql2 = 'update ev_users set password=? where id=?'
        // 疑问 req.body.id 和 req.user.id 的区别
        db.query(sql2, [newpwd, req.user.id], (err, results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc("更改密码失败")

            res.cc('更改密码成功', 0)
        })
    })
}

exports.updateUserpic = (req, res)=>{
    // res.send('更改头像功能')
    console.log(req)
    const sql = 'update ev_users set user_pic=? where id=?'
    db.query(sql, [req.body.user_pic, req.user.id], (err, results)=>{
        if(err) return res.cc(err)
        if( results.affectedRows !== 1) return res.cc('更换头像失败!')
        res.cc('更换头像成功', 0)
    })

}