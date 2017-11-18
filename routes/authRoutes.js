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
  res.send('cookeis are gone!')

})
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    knex('cyclists').where({email: req.user}).then((cyclist)=>{
      res.send(cyclist)
    })
  });
module.exports = router

// const passport = require('passport')
//
//
// module.exports = (app) => {
//
// app.get('/auth/google', passport.authenticate('google', {
//   scope: ['profile']
//   })
// )
//
// app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
//   // console.log('res 2', res.headers)
//   // console.log('req 2', req.headers)
//   // res.send(req.user)
//   res.redirect('bike://login?user=' + JSON.stringify(req.user))
// })
//
// app.get('/auth/logout', (req, res) => {
//   req.logout()
//   res.send('logged out')
// })
//
// app.get('/auth/current_user', (req, res) => {
//   res.send(req.user)
//   })
//
// }
