//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(tableInput) {
    orm.showBurgers(tableInput);
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