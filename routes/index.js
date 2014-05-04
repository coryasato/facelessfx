var express = require('express');
var router = express.Router();
var Instagram = require('instagram-node-lib');
var superagent = require('superagent');

// Instagram
Instagram.set('client_id', '1ed1800fffe7444796f0076b00835ea8');
Instagram.set('client_secret', 'de1472d80fd54645ac1e36111136899f');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/pedals/jasmine', function(req, res) {
  res.render('jasmine');
});
router.get('/pedals/marquis', function(req, res) {
  res.render('marquis');
});
router.get('/custom', function(req, res) {
  res.render('custom');
});

router.get('/repairs', function(req, res) {
  res.render('repairs');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;
