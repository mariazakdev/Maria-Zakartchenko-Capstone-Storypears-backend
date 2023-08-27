const jwt = require("jsonwebtoken");
const config = require("../config");

const authenticateJwt = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJwt;