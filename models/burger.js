//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(cb) {
    orm.selectBurgers(function(res) {
      cb(res);
    });
  },
  addBurger: function(burger_name, cb) {
    orm.insertBurger(burger_name, cb);
  },
  eatBurger: function(burger_name, cb) {
    orm.updateBurger(burger_name, cb);
  }
};
module.exports = actions;