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

    // If authentication is successful, generate a JWT token
    try {
      const accessToken = createTokens(user);

      // Set the access token as a cookie in the HTTP response
      res.cookie(cookieName, accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
        httpOnly: true, // extra protection
      });

      // Authentication succeeded, return a success response with the token
      return res
        .status(200)
        .json({ message: "Authentication successful", token: accessToken });
    } catch (error) {
      // Handle token generation error
      console.error("Token generation error:", error);
      return next(error);
    }
  })(req, res, next);
};

module.exports = {
  login,
};

