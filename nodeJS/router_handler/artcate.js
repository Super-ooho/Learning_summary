const db = require('../db/index')


exports.getArticlelist = (req, res)=>{
    // console.log('测试获取文章列表api')
    let sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results)=>{
        if(err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取文章列表成功',
            data: results
        })
    })
}

exports.addArticleCates = (req, res)=>{
    // res.send('测试增加图书种类接口')
    const sql1 = 'select * from ev_article_cate where name=? or alias=?'
    db.query(sql1, [req.body.name,req.body.alias], (err, results)=>{
        if(err) return res.cc(err)
        if(results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试')
        if(results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名称被占用，请更换后重试！')
        if(results.length === 1 && results[0].alias === req.body.alias) 
            return res.cc('分类别名被占用，请更换后重试！')

        const sql2 = 'insert into ev_article_cate set ?'
        db.query(sql2, req.body, (err, results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败！')

            res.cc('新增文章分类成功！', 0)
        })
    })
}

exports.deleteArticleCates = (req, res)=>{
    // res.cc('测试删除图书种类接口')
    sql = 'update ev_article_cate set is_delete=1 where id=?'
    db.query(sql, req.params.id, (err, results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('删除文章分类失败')
        res.cc('删除文章分类成功', 0)
    })
}

exports.updatecate = (req, res)=>{
     // res.cc('测试更新文章分类接口')
    const sql1 = 'select * from ev_article_cate where id<>? and (name=? or alias=?)'
    db.query(sql1, [req.body.id, req.body.name, req.body.alias], (err, results)=>{
        if(err) return res.cc(err)
        if(results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试')
        if(results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名称被占用，请更换后重试！')
        if(results.length === 1 && results[0].alias === req.body.alias) 
            return res.cc('分类别名被占用，请更换后重试！')
        const sql2 = 'update ev_article_cate set ? where id=?'
        db.query(sql2, [req.body, req.body.id], (err, results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('更新文章分类失败')
            res.cc('更新文章分类成功', 0)
        })
    })
    
}