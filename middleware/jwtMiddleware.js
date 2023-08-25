const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('../config');
const knex = require('../db/db'); 

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error, false);
  }
});

passport.use(jwtStrategy);

module.exports = {
  authenticateJwt: passport.authenticate('jwt', { session: false }),
};