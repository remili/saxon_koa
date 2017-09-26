const salerModel = require("../models/salerModel");
const db = require('../config/db');

module.exports = {
  async add( ctx ){
    const data = ctx.request.body;
    try{
      const client = await salerModel.create(data);
      ctx.status = 200;
      ctx.body = {success:true,id:client._id}
    }catch(err){
      ctx.throw(err)      
    }  
  },
  async search( ctx ){
    let data;
    if(ctx.params.id)
      data = ctx.params.id;
    else  
      data = ctx.request.query;
    try{
      const client = await salerModel.find(data);
      ctx.status = 200;
      ctx.body = {success:true,data_list:client}    
    }catch(err){
      ctx.throw(err)      
    } 
  },
  async update( ctx ){
    const data = ctx.request.body;
    const id = ctx.params.id;
    try{
      const client = await salerModel.findByIdAndUpdate(id,data);
      ctx.status = 200;
      ctx.body = {success:true,id:client._id}    
    }catch(err){
      ctx.throw(err)      
    } 
  }
}