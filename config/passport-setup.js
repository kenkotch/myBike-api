var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys')
var express = require('express');
var knex = require('../knex')
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken')

passport.serializeUser(function(email, done) {
  console.log('hitting serializer')
  done(null, email);
});

passport.deserializeUser(function(email, done) {
    console.log('hitting deserializeUser')
    done(null, email);

});


passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "com.googleusercontent.apps.1069056041791-190icr9mfbs1noclskmu6nu6ev7sghuk"
  },
  function(accessToken, refreshToken, profile, done) {
    const email=profile['emails'][0]['value']
    //console.log(email)
    done(null, email)
  }
));

module.exports = router
