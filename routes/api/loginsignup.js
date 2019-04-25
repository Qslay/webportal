var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');

router.use(csrfProtection);

router.get('/', csrfProtection, function (req, res, next) {
  res.render('home/home', { title: 'Express', token: req.csrfToken() });
});

router.post('/signup', passport.authenticate('local.signup', { failWithError: true, failureFlash: true }),
  function (req, res, next) {
    if (req.xhr) {
      return res.json(req.user);
    }
    res.redirect('/profile')
  },
  function (err, req, res, next) {
    console.log('err', err);
    console.log(req.flash.error);
    if (req.xhr) { return json(req.session.errors); }
    return res.redirect('/');
  }
);


module.exports = router;