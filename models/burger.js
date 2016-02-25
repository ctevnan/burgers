//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(cb) {
    orm.selectBurgers(function(res) {
      callback(res);
    });
  },
  addBurger: function(burger_name, cb) {
    orm.insertBurger(burger_name, callback);
  },
  eatBurger: function(burger_name, cb) {
    orm.updateBurger(burger_name, callback);
  }
};

module.exports = actions;