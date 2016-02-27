//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(cb) {
    orm.showBurgers(function(res) {
      cb(res);
    });
  },
  insertBurger: function(nameInput, devoured) {
    orm.insertBurger('actions', nameInput, 0);
  },
  reupdateBurger: function(inputId) {
    orm.reupdateBurger('actions', inputId);
  },
  updateBurger: function(inputId) {
    orm.updateBurger('actions', inputId);
  },
  deleteBurger: function(inputId) {
    orm.deleteBurger('actions', inputId);
  }
};

module.exports = actions;