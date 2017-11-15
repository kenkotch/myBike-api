var express = require('express');
var knex = require('../knex')
var router = express.Router();
var passport = require('passport');

router.get('/login', (req, res, next)=>{
  res.send('hey your logging in')
})

router.get('/logout', (req, res, next)=>{
  res.send('hey your logging out')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

module.exports = router
