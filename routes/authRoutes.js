const express = require('express');
const router = express.Router();
const knex = require('../db/db')
require('dotenv').config();

const loginController = require('../controllers/loginControllers');
const jwt = require('jsonwebtoken');
const auth = require('../validation/authValidation');
const passport = require('passport');
const authUtils = require('../utils/authUtils');

const config = require('../config');
const bcrypt = require('bcrypt');
const { generateToken } = require('../jwt/jwtHelpers'); 
const {CLIENT_URL } = process.env;
const { authenticateJwt } = require('../middleware/jwtMiddleware'); 
const { validateToken } = require("../jwt/jwt");


router.post('/register', async (req, res) => {
  try {
    const { username, email, password, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;

    // Perform server-side validation, check if fields are valid

    // Hash the password
    const hashedPassword = await authUtils.hashPassword(password);

    // Create the new user
    const newUser = {
      username,
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
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', 
      });

    // Return the token in the response to the client
    return res.status(201).json({ user: createdUser, token: token });
  } catch (err) {
    console.error('Registration error:', err);
    
    console.error('Registration error:', err.message, err.stack);

    res.status(500).json({ message: 'Registration failed.' });
  }
});


  // ADD here  If login is successful, generate a JWT token and send it as a response
router.post('/login', loginController.login);



// router.get('/profile', validateToken , (req, res) => {
// res.json("profile");
// });
router.get('/profile', validateToken, async (req, res) => {
  try {
    // Get the user's id from the token payload
    const userId = req.user.id;

    // Look up the user in your database based on their id
    const user = await knex('users').where({ id: userId }).first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the authenticated user's information in the response
    return res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
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