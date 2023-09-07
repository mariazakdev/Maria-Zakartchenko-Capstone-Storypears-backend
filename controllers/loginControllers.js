const passport = require("passport");
const knex = require("../db/db");
const { createTokens } = require("../jwt/jwt");

const login = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err); 
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    try {
      const tokens = createTokens(user); 
      const accessToken = tokens.accessToken;
      const refreshToken = tokens.refreshToken;

      // Store the refresh token in the database
      await knex('refresh_tokens').insert({
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)  // 7 days from now
      });

      // Set the access token as an HttpOnly cookie
      res.cookie('pearAccessToken', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // ensure it's set for HTTPS connections only in production
        sameSite: 'strict', // or 'none' if cross-domain
      });

      // Send the refresh token back as a secure HttpOnly cookie
      res.cookie('pearRefreshToken', refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // ensure it's set for HTTPS connections only in production
        sameSite: 'strict', // or 'none' if cross-domain
      });

      return res.status(200).json({ message: "Authentication successful" });
    } catch (error) {
      console.error("Token generation or storage error:", error);
      return next(error);
    }
  })(req, res, next);
};

module.exports = {
  login,
};
