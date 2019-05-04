const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true })

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
  res.render('home/home', {
    title: 'Home',
    token: req.csrfToken()
  });
});

module.exports = router;
