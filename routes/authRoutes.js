const express = require('express');
const authController = require('../controllers/authControllers');
const router = require("express").Router();
const passport = require("passport");
const authUtils = require('../utils/authUtils')
const knex = require('../db/db');
const jwt = require('jsonwebtoken');
const config = require('../config');
const verifyToken = require('../middleware/verifyToken');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT token upon successful login
    const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: user,
      token: token,
    });
  })(req, res, next);
});


router.post('/register', async (req, res) => {
  try {
    const { email, password, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;

    // Perform server-side validation, check if fields are valid

    // Check if the username is already taken
    const existingUser = await knex('users').where({ username }).first();
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken.' });
    }

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

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies // JWT
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get('/logout', (req, res) => {
  req.logout((error) => {
      if (error) {
          return res.status(500).json({message: "Server error, please try again later", error: error});
      }
      res.redirect(process.env.CLIENT_URL);
  });
});

router.get('/protected-route', verifyToken, (req, res) => {
  // Your protected route logic here
  res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;