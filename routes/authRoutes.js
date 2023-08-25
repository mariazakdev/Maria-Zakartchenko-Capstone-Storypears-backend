const express = require('express');
const router = express.Router();
const knex = require('../db/db')
require('dotenv').config();

const loginController = require('../controllers/loginControllers');

const auth = require('../validation/authValidation');
const passport = require('passport');
const authUtils = require('../utils/authUtils');
const jwt = require('jsonwebtoken');
const config = require('../config');
const verifyToken = require('../middleware/verifyToken');
const bcrypt = require('bcrypt');

const {CLIENT_URL } = process.env;


router.post('/register', async (req, res) => {
  try {
    const { email, password, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;

    // Perform server-side validation, check if fields are valid

    // Hash the password
    const hashedPassword = await authUtils.hashPassword(password);

    // Create the new user
    const newUser = {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      pen_first_name,
      pen_last_name,
      bio
    };

    // Insert the user into the database
    const [userId] = await knex('users').insert(newUser);
    const createdUser = await knex('users').where({ id: userId }).first();

    // Generate a JWT token upon successful registration
    const token = jwt.sign({ userId: createdUser.id }, config.jwtSecret, { expiresIn: '1h' });

    // Set the token as a cookie in the HTTP response
    res.cookie('token', token, {
      httpOnly: true, // Make the cookie accessible only through HTTP (not JavaScript)
      secure: true,    // Set to true in a production environment with HTTPS
      sameSite: 'strict', // Apply same-site cookie attribute for security
    });

    // Return the token in the response to the client
    return res.status(201).json({ user: createdUser, token: token });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed.' });
  }
});

// router.post('/login', (req, res) => {
//   const requestBody = req.body;
//   // You can perform any processing you need with the request body here
//   // For now, let's just send the request body back as a response
//   res.json(requestBody);
// });


router.post('/login', loginController.login);












// User profile endpoint that requires authentication
router.get('/profile', (req, res) => {
  // Passport stores authenticated user information on `req.user` object.
  // Comes from done function of `deserializeUser`

  // If `req.user` isn't found send back a 401 Unauthorized response
  if (req.user === undefined)
    return res.status(401).json({ message: 'Unauthorized' });

  // If user is currently authenticated, send back user info
  res.status(200).json(req.user);
});

// Create a logout endpoint
router.get('/logout', (req, res) => {
  // Passport adds the logout method to request, it will end user session
  req.logout((error) => {
      // This callback function runs after the logout function
      if (error) {
          return res.status(500).json({message: "Server error, please try again later", error: error});
      }
      // Redirect the user back to client-side application
      res.redirect(process.env.CLIENT_URL);
  });
});


module.exports = router;





















