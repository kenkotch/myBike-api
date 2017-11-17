var express = require('express');

var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next)=>{
  if(!req.user){
    res.send('user access only')
  }
  var bikeArr;
  // knex('bikes').where({cyclist_id: 1}).then((bike)=>{
  //   bikeArr=bike;
  //   return bike
  // }).then((bike)=>{
  //   knex('components').where({bike_id: bikeArr[0]['id']}).then((components)=>{
  //     bikeArr=[...bike, ...components]
  //     res.send(bikeArr)
  //   })
  // })
  res.send(req.user)
  knex('cyclists').where({email: req.user}).then((id)=>{
    res.send(id)
  })
})

router.post('/', (req, res, next)=>{
  res.send('the will is stronger than the skill')
})

module.exports = router;
