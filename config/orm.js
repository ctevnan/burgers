var connection = require('../config/connection.js');

var orm = {
  //see all the burgers in db
 showBurgers: function(table, cb) {
  var query = 'SELECT * FROM ' + table;
  console.log('table: ' + table);
  console.log('cb: ' + cb);
  connection.query(query, function (err, results) {
    if (err) {
      throw err;
    }
    console.log('results from db table: ' + results);
    cb(results);
  });
  }, 
  // add burger 
  insertBurger: function(tableInput, nameInput) {
    var query = 'INSERT INTO ' + table + ' (burger_name, devoured) VALUES (?, ?)';
    connection.query(plusBurg, [nameInput, 0], function(err, result) {
      if (err) {
       throw err;
      } 
      console.log(result); 
    });
  }, 
  // devoured true or false set status false
  reupdateBurger: function(tableInput, idInput){
    var tfBurg = 'UPDATE ' + burger_table + 'SET devoured = 0 WHERE id=?';
    connection.query(tfBurg, [idInput], function(err, result) {
      if (err) {
        throw err;
      } 
      console.log(result);
    });
  },
  //devoured true or false set status true
  updateBurger: function(tableInput, idInput) {
    var nomBurg = 'UPDATE ' + burger_table + ' SET devoured = 1 WHERE id=?';
    connection.query(nomBurg, [idInput], function(err, result) {
      if (err) {
       throw err;
      } 
      console.log(result);
    });
  },
  //set devoured status from false to true
  deleteBurger: function(tableInput, idInput) {
    var noBurg = 'DELETE FROM ' + tableInput + 'WHERE id=?';
    connection.query(noBurg, [idInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  }
} 

module.exports = orm;