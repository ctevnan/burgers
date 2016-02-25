var mysql = require('mysql');

console.log(process.env.JAWSDB_URL);
var connection = mysql.createConnection(process.env.JAWSDB_URL);
console.log("connection to db");

connection.connect();

module.exports = connection;