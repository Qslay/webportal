const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

require('./config/passport.js');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const profileRoute = require('./routes/profile');
const menuRoute = require('./routes/menu');

const signinRouter = require('./routes/signin')
const signupRouter = require('./routes/signup')

const logout = require('./routes/logout');
// const signup = require('./routes/signup');
const api = require('./routes/api/texs');
const authAPI = require('./routes/api/loginsignup');
const profileAPI = require('./routes/api/profileAPI');
const menuAPI = require('./routes/api/menuAPI');

const app = express();







app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(cookieParser());
app.use(session({ secret: 'durango', resave: false, saveUninitialized: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/profile', profileRoute);
app.use('/menu', menuRoute);

app.use('/api/auth', authAPI);
app.use('/api/profile', profileAPI);
app.use('/api/menu', menuAPI);
app.use('/api/test', api)


app.use('/signup', signupRouter);
app.use('/signin', signinRouter)

// app.use('/signup', signup);
app.use('/logout', logout)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb://localhost:27017/durango');

let db = mongoose.connection;

db.once('open', function () {
  console.log('Connected');
})

module.exports = app;
