const mongoose = require('mongoose');
var db = require('../config/db');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let clientSchema = new Schema({
    name: {type:String,required:true},
    id_number: {type:String,required:true},
    telephone: {type:String,required:true},
    saler:{type:ObjectId,ref:'salers'}
},{versionKey:false});

module.exports = db.model('clients',clientSchema);

