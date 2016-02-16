//import orm.js into burger.js
var orm = require('../config/orm.js');

var burger_db = {
  all: function(cb) {
    orm.all('burger_db', function(res) {
      cb(res)
    });
  },
  create: function(nameInput,cb) {
    orm.create('burger_db', nameInput, 1, cb);
  },
  update: function(inputId, cb) {
    orm.update('burger_db', 1, inputId, cb);
  },
  destroy: function(inputId, cb) {
    orm.destroy()
  }
}