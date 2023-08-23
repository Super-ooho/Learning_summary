const joi = require('joi')

const username = joi.string().alphanum().min(2).max(12).required()
const password = joi.string().pattern(/^[\S]{6,12}$/)
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()
const user_pic = joi.string().required()

const reg_login_schema = {
    body:{
        username,
        password
    }
}

const update_userinfo_schema = {
    body:{
        id,
        nickname,
        email
    }
}

const update_userpwd_schema = {
    body:{
        oldpwd: password,
        newpwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

const update_userpic_schema = {
    body:{
        user_pic
    }
}

exports.reg_login_schema = reg_login_schema
exports.update_userinfo_schema = update_userinfo_schema
exports.update_userpwd_schema = update_userpwd_schema
exports.update_userpic_schema = update_userpic_schema



