var express = require('express');
var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')
var bikeMileage;
var bikeArr=[];
router.patch('/', (req, res, next)=>{
req.user='sean.lemberg@gmail.com'

if(!req.user){
  res.send('user access only')
}
//res.send(req.user)
var bike_id;

knex('cyclists').select('id').where({email: req.user}).then((id)=>{
  return id[0]['id']
}).then((id)=>{
  knex('bikes').where({id: id}).then((bike)=>{
    bike_id=bike[0]['id']
    bike[0]['total_mileage']+=Number(req.body.mileage)
    bikeMileage=[bike[0]['total_mileage']];
    return bike[0]
  }).then((bike)=>{
    knex('bikes').update(bike, '*').where({id: id}).then((updatedBike)=>{
      return updatedBike
    }).then((updatedBike)=>{
      knex('components').where({bike_id: bike_id}).then((components)=>{
        delete components[0]['id']
        delete components[0]['bike_id']
        for(var i in components[0]){
          components[0][i]-=Number(req.body.mileage)
        }
        return components[0]
      }).then((components)=>{
        knex('components').update(components, '*').where({bike_id: bike_id}).then((components)=>{
          delete components[0]['id']
          delete components[0]['bike_id']
          bikeArr=[...components, ...bikeMileage]
          res.send(bikeArr)
        })
      })

    })
  })

})

})

module.exports=router
