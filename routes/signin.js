const express = require('express');
const router = express.Router();

const {check, validationResult} = require('express-validator/check');
const csrf = require('csurf');
const passport = require('passport');

const csrfProtection = csrf({cookie: true});

// render signin page to user
router.get('/', csrfProtection, function (req, res, next) {
  res.render('signin', {
    csrfToken: req.csrfToken(),
    errors: req.flash('error'),
    title: 'Sign in'
  });
});

// authenticate user
router.post(
    '/',
    [
      check('email').isEmail().withMessage('Invalid email'),
      check('password').not().isEmpty().withMessage('Invalid password')
    ],
    csrfProtection,
    function (req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.flash('error', errors.array());
        return res.redirect('/signin');
      }
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

          return res.redirect('/home');
        });
      })(req, res, next);
    });

// check if the user is logged in or not
module.exports = router;