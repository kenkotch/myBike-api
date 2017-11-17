var express = require('express');
var router = express.Router();
var passport = require('passport')
const jwt = require('jsonwebtoken')
/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.cookies['session'])
  res.render('index', { title: 'Express' });
});
router.get('/login', (req, res, next)=>{
  res.send('for whatever reason this login is failing continuously')
})


module.exports = router;
