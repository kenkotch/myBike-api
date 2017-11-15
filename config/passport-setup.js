const passport = require('passport')
const GoogleStrategy = require('passport-google').Strategy


passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  // function(token, tokenSecret, profile, done) {
  //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //       return done(err, user);
  //     });
  // }
));
