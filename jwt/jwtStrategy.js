const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('./config'); 
const knex = require('./db/db'); 

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
  try {
    const userId = payload.sub;
    const user = await knex('users').where({ id: userId }).first();

    if (user) {
      return done(null, user); 
    }
    
    return done(null, false); 
  } catch (error) {
    return done(error, false); 
  }
});

passport.use(jwtStrategy);
