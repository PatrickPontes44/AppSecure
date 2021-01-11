 const mysql = require('mysql');

 const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'app_db',
     multipleStatements: true
 });


 db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("connected")
 })

 module.exports = db;