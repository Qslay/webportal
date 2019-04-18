const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */

router.post('/signup', function (req, res) {
  console.log(req.body);
  res.send(req.body.data)
  // passport.authenticate('local.signup', {
  //   successRedirect: '/profile',
  //   failureRedirect: '/',
  //   failureFlash: true
  // })(req, res, next);
});

router.post('/signin', function (req, res) {
  passport.authenticate('local.signin', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      // User does not exist
      const err = {msg : info.message};
      req.flash('error', err);
      return res.redirect('/signin');
    }

    // User exists, authenticate
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/profile/' + user._id);
    });
  })(req, res, next);
});

module.exports = router;
