
const passport = require('passport'); //requiring the passport package
const User = require('../models/user'); //requiring the user model
const LocalStrategy = require('passport-local').Strategy; //requiring the passport local strategy
//Serializing the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//de-serializing the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//implementation of the local strategy for the user signup
passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, email, password, done) {

  User.findOne({ 'email': email }, function (err, user) {
    if (err) {
      return done(err);// return back eny errors
    }
    console.log(user)
    if (user) { //return an error message if user is already has an account
      return done(null, false, {message: 'Email is already in use!'});
    }

    //creating a new user
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.name = req.body.name;
    newUser.username = req.body.username;

    newUser.save(function (err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newUser);
    });
  })
}));

// //implementation of the local stategy to signin
// passport.use('local.signin', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// }, function (req, email, password, done) {
//   User.findOne({ 'account.email': email }, function (err, user) {

//     if (err) {
//       return done(err);
//     }

//     //if no username is entered
//     if (!user) {
//       req.session.errors = 'User not found!';
//       return done(null, false, { message: 'no user found' });
//     }

//     //if the password is incorrect
//     if (!user.validPassword(password)) {
//       req.session.errors = 'Incorrect password!';
//       return done(null, false, { message: 'Wrong password' });
//     }

//     return done(null, user);
//   })
// }));
