//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(tableInput) {
    orm.showBurgers(burger_table);
  },
  insertBurger: function(nameInput, devoured) {
    orm.insertBurger('actions', nameInput, 0);
  },
  reupdateBurger: function(inputId) {
    orm.reupdateBurger('actions', idInput);
  },
  updateBurger: function(inputId) {
    orm.updateBurger('actions', idInput);
  },
  deleteBurger: function(idInput) {
    orm.deleteBurger('actions', idInput);
  }
};

module.exports = actions;