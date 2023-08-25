const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config"); 
const authUtils = require("../utils/authUtils"); 

// Updated login controller function
const login = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err); // Pass any errors to the error handler
    }

    if (!user) {
      // Authentication failed, return an appropriate response
      return res.status(401).json({ message: info.message });
    }

    // If authentication is successful, generate a JWT token
    try {
      // Generate a JWT token with the user's ID
      const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
        expiresIn: "1h",
      });

      // Set the token as a cookie in the HTTP response
      res.cookie("token", token, {
        httpOnly: true, 
        secure: true, 
        sameSite: "strict", 
      });

      // Authentication succeeded, return a success response with the token
      return res
        .status(200)
        .json({ message: "Authentication successful", token });
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
