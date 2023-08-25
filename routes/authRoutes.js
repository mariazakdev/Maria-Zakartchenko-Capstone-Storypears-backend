const express = require('express');
const loginController = require('../controllers/loginControllers');
const auth = require('../validation/authValidation');
const passport = require('passport');
const initPassportLocal = require('../controllers/passportLocalController');
const authUtils = require('../utils/authUtils');
const knex = require('../db/db');
const jwt = require('jsonwebtoken');
const config = require('../config');
const verifyToken = require('../middleware/verifyToken');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const router = express.Router();
initPassportLocal();


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

router.post('/login', (req, res) => {
  const requestBody = req.body;
  // You can perform any processing you need with the request body here
  // For now, let's just send the request body back as a response
  res.json(requestBody);
});

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session); // Use the appropriate session store for your database

const app = express();

// Configure the session
const sessionOptions = {
  secret: process.env.SESSION_SECRET, // Replace with a strong secret key
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore({
    /* MySQL session store configuration options */
  }),
  cookie: {
    maxAge: 3600000, // Session duration in milliseconds (1 hour in this example)
  },
};

app.use(session(sessionOptions));


// Passport.js configuration

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Retrieve the user by ID from your database
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  // If authentication is successful, the user is logged in
  res.json({ message: 'Login successful' });
});

app.get('/logout', (req, res) => {
  req.logout(); // Logs the user out by clearing the session
  res.json({ message: 'Logout successful' });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

// Example of a protected route
app.get('/profile', ensureAuthenticated, (req, res) => {
  // Only authenticated users can access this route
  res.json({ message: 'You are authenticated!' });
});


module.exports = router;





















