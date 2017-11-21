var express = require('express');
var knex = require('../knex')
var router = express.Router();
const boom = require('boom')
const jwt = require('jsonwebtoken')
//pizza camel deluxe
var blueDreams;
router.post('/', (req, res, next)=>{
  var bikeArr=[];
  var bicycle;
  var components;
  knex('cyclists').select('id').where({email: req.body.email}).then((id)=>{
    if(id.length===0){
      knex('cyclists').max('id').then((id)=>{
        return id[0]['max']+1;
      }).then((insertId)=>{
        req.body.id=insertId;
        knex('cyclists').insert(req.body).then(()=>{
            return res.send(['created'])
            //knex.destroy();
        })
      })
    }else if(id.length!==0){
    blueDreams=id[0]['id']
//asdfasdf


    knex('bikes').select('id', 'name', 'total_mileage').where({cyclist_id: blueDreams}).then((bike)=>{
      var bikeId=bike[0]['id'];
      var bikeStuff=bike
      delete bikeStuff[0]['id']
      bicycle=bikeStuff
      return bikeId
    }).then((bikeId)=>{
      knex('components').where({bike_id: bikeId}).then((bikeComponents)=>{
        components=bikeComponents;
        delete components[0]['id']
        delete components[0]['bike_id']
        bikeArr=[...bicycle, ...components]
        res.send(bikeArr)
      })
    })
  }
})

})

router.post('/add', (req, res, next)=>{
  var cyclistIdHolder;
  var finalArr=[]
  var coolBikeId;
  var blueIncrement=req.body.sinceRepair
  delete req.body.sinceRepair
  knex('cyclists').max('id').then((id)=>{
    cyclistIdHolder=id[0]['max']
  }).then(()=>{
    knex('bikes').max('id').then((id)=>{
      return id[0]['max']+1;
    }).then((insertId)=>{
      coolBikeId=insertId;
      req.body.id=insertId;
      req.body.cyclist_id=cyclistIdHolder;
      knex('bikes').insert(req.body).then(()=>{
        delete req.body.id;
        delete req.body.cyclist_id;
      }).then(()=>{
        knex('components').max('id').then((id)=>{
          return id[0]['max']+1;
        }).then((insertId)=>{
          var newComponents= new Object();
          newComponents.id=insertId;
          newComponents.chain=2000-blueIncrement
          newComponents.tires=1500-blueIncrement
          newComponents.brake_pads=300-blueIncrement
          newComponents.bike_id=coolBikeId;
          knex('components').insert(newComponents).then(()=>{
            delete newComponents.id;
            delete newComponents.bike_id;
            finalArr.push(req.body);
            finalArr.push(newComponents);
            res.send(finalArr)
          })
        })
      })
    })
  })
})

module.exports = router;
