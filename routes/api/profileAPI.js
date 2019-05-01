var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');

router.use(csrfProtection);

const User = require('../../models/user');

router.get('/', csrfProtection, function (req, res, next) {
  try {
    res.render('profile/profile');
  } catch (e) {
    console.log(e);

  }

});



module.exports = router;