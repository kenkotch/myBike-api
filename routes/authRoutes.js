var express = require('express');
var knex = require('../knex')
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken')
router.get('/login', (req, res, next)=>{
  res.send('hey your logging in')
})

router.get('/logout', (req, res, next)=>{
  req.logout()
  res.send('check your cookies mother fucker')

})
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    knex('cyclists').where({email: req.user}).then((cyclist)=>{
      res.send('cyclist')
      res.redirect('bike://login?user=' + JSON.stringify(req.user))
    })
  });
module.exports = router
