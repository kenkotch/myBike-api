var express = require('express');

var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')
//im going to remove the liquid and make it hard..
router.get('/', (req, res, next)=>{
  // if(!req.user){
  //   res.send('user access only')
  // }
  // var bikeArr=[];
  // var bicycle;
  // var components;
  // knex('cyclists').select('id').where({email: req.user}).then((id)=>{
  //   if(id.length===0){
  //     res.send('user access only')
  //   }
  //   return id[0]['id']
  // }).then((id)=>{
  //   knex('bikes').select('id', 'name', 'total_mileage').where({cyclist_id: id}).then((bike)=>{
  //     var bikeId=bike[0]['id'];
  //     var bikeStuff=bike
  //     delete bikeStuff[0]['id']
  //     bicycle=bikeStuff
  //     return bikeId
  //   }).then((bikeId)=>{
  //     knex('components').where({bike_id: bikeId}).then((bikeComponents)=>{
  //       components=bikeComponents;
  //       delete components[0]['id']
  //       delete components[0]['bike_id']
  //       bikeArr=[...bicycle, ...components]
  //       res.send(bikeArr)
  //     })
  //   })
  // })
  res.send([{"name":"purple","total_mileage":140},{"chain":60,"tires":60,"brake_pads":60}])
})

router.post('/', (req, res, next)=>{
  res.send('the will is stronger than the skill')
})

module.exports = router;
