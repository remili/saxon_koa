const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/react_pro',{useMongoClient: true});
const db = mongoose.connection;

db.once('open', function(){ console.log('连接成功')});

db.on('error',(err)=>console.log('Error: '+err));

db.on('close',()=> console.log('数据库断开连接'));

module.exports = db;