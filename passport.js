const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const knex = require('./db/db')
const authUtils = require('./utils/authUtils');


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Query your database to find a user with the provided username
      const user = await knex('users')
        .where({ username: username })
        .first();

      if (!user) {
        // If the user doesn't exist, return false to indicate authentication failure
        return done(null, false);
      }

      // Compare the provided password with the stored hashed password
      const passwordsMatch = await authUtils.comparePasswords(password, user.hashedPassword);

      if (passwordsMatch) {
        // Authentication succeeded, return the user object
        return done(null, user);
      } else {
        // Passwords do not match, return false to indicate authentication failure
        return done(null, false);
      }
    } catch (err) {
      // Handle database errors or other exceptions
      return done(err);
    }
  })
);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if a user with the Google ID already exists in your database
        const existingUser = await knex('users')
          .where({ googleId: profile.id })
          .first();

        if (existingUser) {
          // If the user exists, return the user
          return done(null, existingUser);
        } else {
          // If the user doesn't exist, create a new user in your database
          const newUser = {
            googleId: profile.id,
            // You can set other properties based on the Google profile as needed
          };

          // Insert the new user into the database
          const [userId] = await knex('users').insert(newUser);

          // Fetch the newly created user from the database
          const createdUser = await knex('users')
            .where({ id: userId })
            .first();

          // Return the created user
          return done(null, createdUser);
        }
      } catch (err) {
        // Handle database errors or other exceptions
        return done(err);
      }
    }
  )
);




passport.serializeUser((user, done) => {
  // Serialize the user into the session
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Deserialize the user from the session
    // Query your database to find the user by id
    const user = await knex('users')
      .where({ id: id })
      .first();

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    // Handle database errors or other exceptions
    return done(err);
  }
});

// Export the Passport instance for use in your application
module.exports = passport;
