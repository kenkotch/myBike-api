var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys')


// passport.use(new GoogleStrategy({
//   callbackURL: '/auth/google/callback',
//   clientID: keys.google.clientID,
//   clientSecret: keys.google.clientSecret
//   },
//   function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err) {
//       return done(err, user);
//     });
//   }
// ))


passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);


      // this is for mongodb
      //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //    return done(err, user);
      //  });
  }
));
