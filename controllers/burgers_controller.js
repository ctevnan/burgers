var express = require('express');
var router = express.Router();
var actions = require('../models/burger.js');

//get route -> index
router.get('/', function (req, res) {
  console.log('show all burgers');
  actions.showAllBurgers(function (burgerData) {
    console.log('burgerData from orm: ' + burgerData);
    var burgerTableData = {
      burgers: burgerData
    }
    console.log('burgerTableData');    
    res.render('home', burgerTableData);
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  actions.insertBurger(req.body.burger_name, function(result) {
    console.log(result);
  });
  res.redirect('/');
});

//put route -> back to index
router.put('/update', function(req, res) {
  actions.reupdateBurger(req.body.burger_id, function(result) {
    console.log(result);
  });
  res.redirect('/');
});
//delete route -> back to index
router.delete('/delete', function(req, res) {
  actions.updateBurger(req.body.burger_id, function(result) {
    console.log(result);
  });
  res.redirect('/');
});
//delete route -> back to index, burger gone
router.delete('/remove', function(req,res) {
  actions.deleteBurger(req.body.burger_id, function(result) {
    console.log(result);
  });
  res.redirect('/');
});

module.exports = router;