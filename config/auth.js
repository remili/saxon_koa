const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');
const config = require('./index');
const userModel = require("../models/userModel");

const auth = {
    //生成token
    token(id){
        return jwt.sign({userid: id},config.session.secret,{ expiresIn: config.session.maxAge/1000});
    },
    //验证token
    async authToken(){
        await koajwt({secret:config.session.secret}); 
    },
    //验证用户是否登录
    isAuthenticated(){
        return async (ctx,next) => {
            auth.authToken().then((ctx)=>{
                console.log(ctx.state.user);   
            });              
            const user = await userModel.findById(ctx.state.user);
            console.log(22222222+user);
            if(!user) ctx.throw('UnauthorizedError',401)
            await next(); 
        }  
    }                  
}

module.exports = auth;
