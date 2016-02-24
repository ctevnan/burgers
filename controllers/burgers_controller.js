var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get route -> index
router.get('/', function(req,res) {
      console.log(yesss);
      burger.all(function(burger_data) {
          console.log(got here!);
          res.render('index', {burger_data: burger_data});
      });
});

//post route -> back to index
router.post('/create', function(req, res) {
      burger.create(req.body.burger_name, function(result){
           res.redirect('/');
      });
});

//put route -> back to index
router.put('/update', function(req, res) {
      burger.update(req.body.burger_id, function(result) {
             res.redirect('/');
      });
});

//delete route -> back to index
router.delete('/destroy', function(req, res) {
      burger.destroy(req.body.burger_id, function(result) {
            res.redirect('/');
      });
});
module.exports = router;