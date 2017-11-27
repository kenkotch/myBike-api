const express = require('express')
const knex = require('../knex')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/login', (req, res, next) => {
  res.send('hey your logging in')
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.send('logged out')
})

router.get('/emails', (req, res, next) => {
  knex('emails').select('email').then((emails) => {
    res.send(emails)
  })
})

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      console.log('req.user:', req.user)
      res.redirect('bikenew://login?user=' + JSON.stringify(req.user))
  })

module.exports = router
