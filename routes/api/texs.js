var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = {"firstName":"John", "lastName":"Doe"}
  res.status(200).json(name)
});

module.exports = router;
