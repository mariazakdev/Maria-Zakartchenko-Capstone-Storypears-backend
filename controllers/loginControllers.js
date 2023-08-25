const passport = require('passport');

// Login controller function
const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err); // Pass any errors to the error handler
    }

    if (!user) {
      // Authentication failed, return an appropriate response
      return res.status(401).json({ message: info.message });
    }

    // Use req.logIn to establish a session
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Authentication succeeded, return a success response
      return res.status(200).json({ message: 'Authentication successful' });
    });
  })(req, res, next);
};

module.exports = {
  login,
};