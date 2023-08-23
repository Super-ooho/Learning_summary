const express = require('express')
const router = express.Router()
const arcateHandler = require('../router_handler/artcate')

const expressJoi = require('@escook/express-joi')
const {add_cate_schema, delete_cate_schema, update_cate_schema} = require('../schema/artcate')

router.get('/articleList', arcateHandler.getArticlelist)
router.post('/addcates', expressJoi(add_cate_schema), arcateHandler.addArticleCates)
router.get('/deletecate/:id',expressJoi(delete_cate_schema), arcateHandler.deleteArticleCates)
router.get('/updatecate/', expressJoi(update_cate_schema), arcateHandler.updatecate)


module.exports = router