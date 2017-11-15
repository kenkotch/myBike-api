var express = require('express');

var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next)=>{
  var bikeArr;
  knex('bikes').where({cyclist_id: 1}).then((bike)=>{
    bikeArr=bike;
    return bike
  }).then((bike)=>{
    knex('components').where({bike_id: bikeArr[0]['id']}).then((components)=>{
      bikeArr=[...bike, ...components]
      res.send(bikeArr)
    })
  })
})

module.exports = router;
