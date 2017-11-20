var express = require('express');
var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')
var bikeMileage;
var bikeArr=[];
router.patch('/', (req, res, next)=>{
if(!req.body.email){
  res.send('user access only')
}
var bike_id;
knex('cyclists').select('id').where({email: req.body.email}).then((id)=>{
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
router.patch('/tires', (req, res, next)=>{
    if(!req.body.email){
      res.send('user access only')
    }
    knex('cyclists').select('id').where({email: req.body.email}).then((id)=>{
      return id[0]['id']
    }).then((cyclist_id)=>{
      knex('bikes').select('id').where({cyclist_id: cyclist_id}).then((id)=>{
        return id[0]['id']
      }).then((bike_id)=>{
        knex('components').update({tires:  1500}).where({bike_id: bike_id}).then(()=>{

          knex('components').select('tires').where({bike_id: bike_id}).then((tires)=>{
            res.send(tires[0]['tires'].toString())
          })
        })
      })
    })
})
router.patch('/chain', (req, res, next)=>{
    if(!req.body.email){
      res.send('user access only')
    }
    knex('cyclists').select('id').where({email: req.body.email}).then((id)=>{
      return id[0]['id']
    }).then((cyclist_id)=>{
      knex('bikes').select('id').where({cyclist_id: cyclist_id}).then((id)=>{
        return id[0]['id']
      }).then((bike_id)=>{
        knex('components').update({chain:  2000}).where({bike_id: bike_id}).then(()=>{




          knex('components').select('chain').where({bike_id: bike_id}).then((chain)=>{
            res.send(chain[0]['chain'].toString())
          })
        })
      })
    })
})
router.patch('/brakes', (req, res, next)=>{
    if(!req.body.email){
      res.send('user access only')
    }
    knex('cyclists').select('id').where({email: req.body.email}).then((id)=>{
      return id[0]['id']
    }).then((cyclist_id)=>{
      knex('bikes').select('id').where({cyclist_id: cyclist_id}).then((id)=>{
        return id[0]['id']
      }).then((bike_id)=>{
        knex('components').update({brake_pads:  300}).where({bike_id: bike_id}).then(()=>{




          knex('components').select('brake_pads').where({bike_id: bike_id}).then((brake_pads)=>{
            res.send(brake_pads[0]['brake_pads'].toString())
          })
        })
      })
    })
})

module.exports=router
