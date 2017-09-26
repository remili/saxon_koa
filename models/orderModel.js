const mongoose = require('mongoose');
var db = require('../config/db');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let orderSchema = new Schema({
    contract_no: {type:String,required:true},
    bsnnk_name: {type:String,required:true},
    bank_account: {type:String,required:true},
    amount: {type:String,required:true},
    contract_duration: {type:String,required:true},
    client:{type:ObjectId,ref:'clients'}   
},{versionKey:false});

module.exports = db.model('orders',orderSchema);

