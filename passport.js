const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const knex = require('./db/db')
const authUtils = require('./utils/authUtils');
const jwt = require('jsonwebtoken'); // LATER
const config = require('./config'); 
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', 
      passwordField: 'password', 
    },
    (email, password, done) => {
      console.log('User who logged in - backend message:', email, password);
      // users from database
      knex('users')
        .where({ email: email })
        .first()
        .then((user) => {
          if (!user) {
            return done(null, false, { message: 'Incorrect email or password - backend error' });
          }

          // Compare password to hash
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return done(err);
            }

            if (!result) {
              return done(null, false, { message: 'Incorrect email or password- backend error ' });
            }

            return done(null, user);
          });
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);


passport.serializeUser((user, done) => {
  // Store the user's ID in the session
  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  try {
    // Retrieve the user from the database using the ID stored in the session
    const user = await knex('users')
      .where({ id: id })
      .first();

    if (!user) {
      // If the user is not found, return an error
      return done(null, false);
    }

    // If the user is found, return the user object, which will be attached to req.user
    return done(null, user);
  } catch (err) {
    // Handle any errors that occur during deserialization
    return done(err);
  }
});

module.exports = passport;
