const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')


passport.use(new GoogleStrategy({
  callbackURL: 'http://localhost:3000',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
  },
  (accessToken, refreshToken, profile, done) => {
          // passport callback function
          console.log('passport callback function fired:');
          console.log(profile);
      })
//   function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
)
