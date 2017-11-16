var express = require('express');

var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next)=>{
  res.send('get')
})

router.post('/', (req, res, next)=>{
  res.send('post')
})

router.patch('/', (req, res, next)=>{
  res.send('patch')
})

module.exports=router
