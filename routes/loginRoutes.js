const express = require('express');
const router = express.Router();
const linksController = require('../controllers/loginController');

app.get('/login', (req, res) => {
  res.render('login'); // Render your login form template
});

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/profile', // Redirect on successful login
    failureRedirect: '/login',   // Redirect on failed login
    failureFlash: true,         // Enable flash messages
  })
);
module.exports = router;