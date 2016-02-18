//this needs more work. (see step 7 of config section for hw)
var connection = require('./connection.js');

var orm = {
 // name : anonymous function
 // updateName: function() {
 //    var s = 'SELECT burger_name FROM ' + tableInput;
 //    connection.query(s, function(err, result) {

 //      console.log(result);
 //    });
 //  },

  selectAll: function(burger_table) {
  var s = 'SELECT * FROM' + burger_table;
      connection.query(s, [burger_table], function(err, res) {
​
      console.log(result);
    });
  }     
 
 insertOne: function(burger_table, burger_name) {
  var s = 'INSERT INTO' + burger_table + 'VALUES' + (burger_name); 'INSERT INTO' + burger_table + 'SET' + burger_name="";
      connection.query(s, [burger_table, burger_name], function(err, res) {

      console.log(result);
    });
  }

  updateOne: function(burger_table, burger_name) {
    var s = 'UPDATE' + burger_table + 'SET' burger_name='' 'WHERE' + id='';
    connection.query(s, [burger_table, burger_name], function(err, res) {

      console.log(result);
    });
  }

  deleteOne: function(burger_table, burger_name) {
    var s = 'ALTER TABLE' + burger_table + 'DROP COLUMN' + burger_name;
    connection.query(s, [burger_table, burger_name], function(err, res) {

    console.log(result);  
    });
  }
module.exports = orm;