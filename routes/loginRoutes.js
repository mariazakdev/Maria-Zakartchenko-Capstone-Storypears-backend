const passport = require('passport');

// Route to start GitHub authentication
router.get('/auth/github', passport.authenticate('github'));

// GitHub authentication callback route
router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/success', 
    failureRedirect: '/login'    
  })
);

module.exports = router;