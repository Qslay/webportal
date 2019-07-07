/**
 * Check whether the user is authenticated. If the user is authenticated,
 * continue the next middleware; otherwise, redirect to sign in page.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/signin');
  }
  
module.exports = {
    isLoggedIn
}

