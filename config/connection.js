var mysql = require('mysql');
//var connection = mysql.createConnection(process.env.JAWSDB_URL);
var connection = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("connected as id" + connection.threadId);
});  

//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//  if (err) throw err;
  
//  console.log('The solution is: ', rows[0].solution);
//});
//connection.end();    
//console.log(process.env.JAWSDB_URL);
//console.log("connection to db");

module.exports = connection;