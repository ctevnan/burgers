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

 selectAll: function(burger_table, burger_name) {
  var s = 'SELECT * FROM' + burger_table + 'WHERE burger_name = ?';
      connection.query(s, [burger_name], function(err, res) {

      console.log(result);
    });
  }    
 

 //reference function below 
  findByName: function(tableInput, burger_name) {
    var s = 'SELECT * FROM' + tableInput + 'WHERE burger_name = ?';
    connection.query(s, [burger_name], function(err, res) {

      console.log(result);
    });
  },
}
module.exports = orm;