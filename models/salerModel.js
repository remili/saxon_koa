const mongoose = require('mongoose');
var db = require('../config/db');
const Schema = mongoose.Schema;

let salerSchema = new Schema({
    name: {type:String,required:true},
    id_number: {type:String,required:true},
    sex: {type:Number,required:true},
    telephone: {type:String,required:true},
    hiredate: {type:Date,required:true}, 
    leavdate: Date,
    reason: String   //离职原因
},{versionKey:false});

module.exports = db.model('salers',salerSchema);

