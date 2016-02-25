var express = require('express');
var router = express.Router();
var actions = require('../models/burger.js');

//get route -> index
router.get('/', function(req,res) {
  actions.showBurgers(function(burger_data) {    
  res.render('index', {burger_data});
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  actions.addBurger(req.body.entry, function(result) {
    res.redirect('/');
  });
});

//put route -> back to index
router.put('/update', function(req, res) {
  actions.eatBurger(req.body.burger, function(result) {
    console.log(req.body);
    console.log(req.body.burger);
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;