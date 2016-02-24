var mysql = require('mysql');

console.log(process.env.)
var connection = mysql.createConnection({
//  port: 3000,
//  user: 'root',
//  password: '',
//  database: 'burgers_db'
//});

//connection.connect(function(err) {
//  if (err) {
//    console.error('error connecting:'+err.stack);
//    return;
//  }
//  console.log('connected as id' + connection.threadId);
});

module.exports = connection;