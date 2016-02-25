var connection = require('./connection.js');

var orm = {
 selectBurgers: function(cb) {
    var s = "SELECT * FROM burgers";
    connection.query(s, function(err, rows, fields) {
    if (err) throw err;
    cb(rows);  
    });
  },
  selectAll : function() {
     'SELECT * FROM' + burger_table;
      connection.query(s, [burger_table]), function(err, res) {
        console.log(result);
      callback(err, res);  
    };
  }, 
 insertInto : function(burger_table, burger_name, callback) {
  'INSERT INTO + burger_table' + 'VALUES + (burger_name)' + 'SET + burger_name'
      connection.query(s, [burger_table, burger_name]), function(err, res) {
        console.log(result);
      callback(null, res);
    };
  },
  updateOne: function(burger_table, burger_name, callback) {
    'UPDATE + burger_table' + 'SET + burger_name' + 'WHERE + id'
    connection.query(s, [burger_table, burger_name]), function(err, res) {
      console.log(result);
      callback(err, res);
    };
  },
  deleteOne: function(burger_table, burger_name, callback) {
   'ALTER TABLE' + burger_table + 'DROP COLUMN' + burger_name
    connection.query(s, [burger_table, burger_name]), function(err, res) {
      console.log(result);
    callback(err, res);  
    };
  }
}
module.exports = orm;