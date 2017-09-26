const clientModel = require("../models/clientModel");

module.exports = {
  async add( ctx ){
    const data = ctx.request.body;
    try{
      const client = await clientModel.create(data);
      ctx.status = 200;
      ctx.body = {success:true,id:client._id}

    }catch(err){
      ctx.throw(err)      
    }     
  },
  async search( ctx ){
    let data;
    if(ctx.params.id) 
      data = {_id:ctx.params.id};
    else 
      data = ctx.request.query;  
    try{
      const client = await clientModel.find(data);
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
      const client = await clientModel.findByIdAndUpdate(id,data);
      ctx.status = 200;
      ctx.body = {success:true,id:client._id}    
    }catch(err){
      ctx.throw(err)      
    } 
  }
}