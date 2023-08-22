const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const knex = require('./db/db')
const authUtils = require('./utils/authUtils');
const jwt = require('jsonwebtoken'); // Import JWT module
const config = require('./config'); 

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await knex('users')
        .where({ email: email })
        .first();
      if (!user) {
        return done(null, false);
      }
      const passwordsMatch = await authUtils.comparePasswords(password, user.hashedPassword);
      if (passwordsMatch) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err);
    }
  })
);


// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await knex('users')
//       .where({ id: id })
//       .first();

//     if (!user) {
//       return done(null, false);
//     }

//     return done(null, user);
//   } catch (err) {
//     return done(err);
//   }
// });

module.exports = passport;
