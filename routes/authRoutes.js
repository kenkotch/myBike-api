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

router.get('/emails', (req, res, next)=>{
  knex('emails').select('email').then((emails)=>{
    res.send(emails)
  })
})
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      // res.cookie(token, 'cookies')
      
      console.log('req.user:', req.user)
      res.redirect('bike://login?user=' + JSON.stringify(req.user))
  });
module.exports = router
