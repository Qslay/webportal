const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true })

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
  res.render('profile/menu', {
    title: 'Customize your menu',
    token: req.csrfToken()
  });
});

module.exports = router;
