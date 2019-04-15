const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');

const api = require('./routes/api/texs')
const authAPI = require('./routes/api/loginsignup');


const app = express();

require('./config/passport.js');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);

app.use('/api/auth', authAPI);
app.use('/api/test', api)

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

db.once('open', function(){
 console.log('Connected');
})

module.exports = app;
