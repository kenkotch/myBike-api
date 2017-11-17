var express = require('express');
var knex = require('../knex')
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken')
router.get('/login', (req, res, next)=>{
  res.send('hey your logging in')
})

// router.get('/google', passport.authenticate("google", {
//   scope: ['profile']
// }))
// //auth logout
// router.get('/logout', (req, res, next)=>{
//   //handle with passport
//   res.send('hey your logging out')
// })
//
//

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/google/redirect', passport.authenticate('google'), (req, res, next)=>{
  res.send('you reached the callback')
})


module.exports = router
