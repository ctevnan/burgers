var express = require('express');
var router = express.Router();
var actions = require('../models/burger.js');

//get route -> index
router.get('/', function(req,res) {
  actions.seeBurg(function(burger_data) {    
    res.render('', {burger_data});
  });
});

//post route -> back to index
router.post('/create', function(req, res) {
  actions.plusBurg(req.body.burger_name, function(result) {
    console.log(result);
  });
  res.redirect('/');
});

//put route -> back to index
router.put('/update', function(req, res) {
  actions.tfBurg(req.body.burger_id, function(result) {
    //console.log(req.body);
    //console.log(req.body.burger);
    console.log(result);
  });
  res.redirect('/');
});
//delete route -> back to index
router.delete('/delete', function(req, res) {
  actions.nomBurg(req.body.burger_id, function(result) {
    console.log(result);
  });
  res.redirect('/')
});
//delete route -> back to index, burger gone
router.delete('/remove', function(req,res) {
  actions.noBurg(req.body.burger_id, function(result) {
    console.log(result);
  });
});

module.exports = router;