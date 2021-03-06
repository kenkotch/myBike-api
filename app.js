var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession=require('cookie-session')
var bodyParser = require('body-parser');
var index = require('./routes/index');
var authRoutes = require('./routes/authRoutes')
var components= require('./routes/components')
var cyclists= require('./routes/cyclists');
var bikes = require('./routes/bikes');
var passportSetup=require('./config/passport-setup')
var app = express();
var session=require('express-session')
var keys= require('./config/keys')


const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/cyclists', cyclists)
app.use('/bikes', bikes)
app.use('/components', components)
app.use('/auth', authRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
