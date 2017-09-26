const mongoose = require('mongoose');
var db = require('../config/db');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type:String,required:true},
    password: {type:String,required:true},
    type: {type:Number,required:true},
    time: {type:Date,default:Date.now},
    leave: {type: Boolean,default: false}     
},{versionKey:false});

UserSchema.methods = {
    //检查用户权限
    hasRole: (type) => {

    },
    //验证用户密码
    authpassword: () => {

    },
    //生成盐
    makeSalt: () => {
        return crypto.randomBytes(16).toString()
    },
}
module.exports = db.model('users',UserSchema);

