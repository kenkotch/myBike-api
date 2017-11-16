var express = require('express');
var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')

router.patch('/', (req, res, next)=>{
  knex('components').where({bike_id: 1}).then((components)=>{
    delete components[0]['id']
    delete components[0]['bike_id']
    for(var i in components[0]){
      components[0][i]-=Number(req.body.mileage)
    }
    knex('components').update(components[0], '*').where({bike_id: 1}).then((components)=>{
      delete components[0]['id']
      delete components[0]['bike_id']
      res.send(components[0])
    })
  })
})

module.exports=router
