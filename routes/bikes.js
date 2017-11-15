var express = require('express');

var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next)=>{
  knex('bikes').where({cyclist_id: 1}).then((bike)=>{
    res.send(bike)
  })
})

module.exports = router;
