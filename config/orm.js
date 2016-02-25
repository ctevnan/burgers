var connection = require('./connection.js');

var orm = {
 selectBurgers: function(cb) {
    var s = "SELECT * FROM burgers";
    connection.query(s, function(err, rows, fields) {
      if (err) throw err;
      cb(rows);  
    });
  },
  insertBurger: function(burger_input, cb) {
    var s = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(s, [burger_input], function(err, rows, fields) {
      if (err) throw err;
      cb(rows);  
    });
  }, 
  updateBurger: function(burger_input, cb) {
    var s = "UPDATE burgers SET devoured=1 WHERE burger_name=?";
    connection.query(s, [burger_input], function(err, rows, fields) {
      if (err) throw err;
      cb(rows);
    });
  }
};

module.exports = orm;