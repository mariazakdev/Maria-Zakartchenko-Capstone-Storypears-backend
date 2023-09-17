const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
  // Extract the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token.split(' ')[1], config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    } else {
      req.userId = decoded.userId;
      next(); 
    }
  });
}

module.exports = verifyToken;
