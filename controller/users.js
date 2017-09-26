const userModel = require("../models/userModel")
const auth = require('../config/auth')
const crypto  = require('crypto')

module.exports = {
  async login( ctx ){
    const data = ctx.request.query;
    try{
      const user = await userModel.findOne(data);
      if(user){
        ctx.status = 200;
        ctx.body = {success:true,access_token: auth.token(user._id),userid:user._id,type:user.type}    
      }else{
        ctx.body = {error_msg:'用户不存在'}
      } 
    }catch(err){
      ctx.throw(err)      
    } 
  },
  async search(ctx){
    let data;
    if(ctx.params.id)
      data = ctx.params.id
    else
      data = ctx.request.body;      
  } 
}







