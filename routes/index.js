var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', function(req, res, next) {
    res.render('index');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('/treatments/list', function(req, res, next) {
    res.render('list');
});

router.get('/treatments/:id', function(req, res, next) {
    res.render('treatment');
});

module.exports = router;
