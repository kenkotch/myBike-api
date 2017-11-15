var express = require('express');
var knex = require('../knex')
var router = express.Router();


router.get('/login', (req, res, next)=>{
  res.send('hey your logging in')
})

router.get('/logout', (req, res, next)=>{
  res.send('hey your logging out')
})

router.get('/google', (req, res, next)=>{
  res.send('fuck you mother fucker')
})

module.exports = router
