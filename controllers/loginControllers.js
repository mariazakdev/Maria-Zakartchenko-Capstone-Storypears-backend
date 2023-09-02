const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config"); 
const authUtils = require("../utils/authUtils"); 
const { createTokens} = require("../jwt/jwt");
const cookieName = process.env.COOKIE_NAME;

const login = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err); 
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    try {
      const tokens = createTokens(user); // This function now returns both access and refresh tokens
      const accessToken = tokens.accessToken;
      const refreshToken = tokens.refreshToken;

      // Store the refresh token in the database
      await knex('refresh_tokens').insert({
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)  // 7 days from now
      });

      // Set the access token as a cookie (or however you're sending it back)
      res.cookie('pearAccessToken', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
        httpOnly: true,
      });

      // You might also want to send the refresh token back as a secure HTTP-only cookie
      res.cookie('pearRefreshToken', refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: true,  // ensure it's set for HTTPS connections
      });

      return res
        .status(200)
        .json({ message: "Authentication successful", token: accessToken, refreshToken: refreshToken });
    } catch (error) {
      console.error("Token generation or storage error:", error);
      return next(error);
    }
  })(req, res, next);
};


module.exports = {
  login,
};

