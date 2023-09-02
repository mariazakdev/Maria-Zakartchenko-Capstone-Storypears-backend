const { sign, verify } = require("jsonwebtoken");
const { jwtSecret } = require('../config'); 

/**
 * Creates a JWT for a given user.
 * @param {Object} user - The user object.
 * @returns {string} - The generated JWT.
 */
const createTokens = (user) => {
  console.log("User Data for Token:", user);
  const accessToken = sign({ id: user.id }, jwtSecret, { expiresIn: '48h' });
  console.log("Generated Access Token:", accessToken);
  return accessToken;
};

/**
 * Middleware to validate the JWT in the request.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express next middleware function.
 */
const validateToken = (req, res, next) => {
  console.log("Inside validateToken Middleware.");
  console.log("Received Cookies:", req.cookies);
  
  const accessToken = req.cookies["pearCookie"];

  if (!accessToken) {
    return res.status(401).json({ error: "Access token is missing. User not authenticated." });
  }

  try {
    const decodedToken = verify(accessToken, jwtSecret);
    console.log("Decoded Token Data:", decodedToken);

    // Attach the decoded user data to the request object.
    req.user = decodedToken;

    return next();
  } catch (err) {
    console.error("Error while verifying token:", err);
    // JWT verification can fail for multiple reasons, such as token expiration or token tampering.
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: "Access token has expired. Please log in again." });
    } else {
      return res.status(403).json({ error: "Invalid access token." });
    }
  }
};

module.exports = { createTokens, validateToken };
