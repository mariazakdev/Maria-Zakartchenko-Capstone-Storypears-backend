const knex = require("../db/db");
const passport = require('passport');

// Display the login form
function showLoginForm(req, res) {
  res.render('login'); // Render your login form template
}

// Handle login form submission using Passport middleware
function handleLogin(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/profile', // Redirect on successful login
    failureRedirect: '/login',   // Redirect on failed login
    failureFlash: true,         // Enable flash messages
  })(req, res, next);
}

// Display the user's profile (requires authentication)
function showProfile(req, res) {
  res.render('profile', { user: req.user }); // Render the user's profile
}


module.exports = {
  showLoginForm,
  handleLogin,
  showProfile,
};