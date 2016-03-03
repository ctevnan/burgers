//import orm.js into burger.js
var orm = require('../config/orm.js');

var actions = {
  showBurgers: function(cb) {
    console.log('cb data retrieval from orm' + cb);
    console.log('show burgers');
      orm.showAllBurgers('burgers', function (res) {
      cb(res);
    });
  },
  insertBurger: function(nameInput, devoured) {
    orm.insertBurger('actions', nameInput, 0);
  },
  reupdateBurger: function(inputId) {
    orm.reupdateBurger('actions', id);
  },
  updateBurger: function(inputId) {
    orm.updateBurger('actions', id);
  },
  deleteBurger: function(idInput) {
    orm.deleteBurger('actions', id);
  }
};

module.exports = actions;