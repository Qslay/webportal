const express = require('express');
const router = express.Router();

/**
 * In this route, the session will be destroyed as the user logs off of the
 * system and send them back to the sign in page
 */

router.get('/', function(req, res, next){
    req.logout();
    req.session.destroy();
    res.redirect('/signup');
});


module.exports = router;
