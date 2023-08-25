
// const knex = require("../db/db");
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config');

// // Display the login form
// function showLoginForm(req, res) {
//   res.render('login'); 
// }

// // Handle login form submission using Passport middleware
// function handleLogin(req, res, next) {
//   passport.authenticate('local', async (err, user) => {
//     if (err || !user) {
//       return res.status(401).json({ message: 'Authentication failed' });
//     }

//     // Generate a JWT token upon successful login
//     const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });

//     res.status(200).json({
//       success: true,
//       message: 'Login successful',
//       user: user,
//       token: token,
//     });
//   })(req, res, next);
// }

// // Display the user's profile (requires authentication)
// function showProfile(req, res) {
//   res.render('profile', { user: req.user }); // Render the user's profile
// }


// module.exports = {
//   showLoginForm,
//   handleLogin,
//   showProfile,
// };