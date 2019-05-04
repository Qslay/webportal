const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true })

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
    res.status(200).json('found');
});

module.exports = router;
