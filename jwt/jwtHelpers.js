const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config'); 
const generateToken = (user) => {
  const payload = {
    sub: user.id, // User's ID or a unique identifier
  };

  const options = {
    expiresIn: '1h', // Token expiration time
  };

  return jwt.sign(payload, jwtSecret, options);
};

module.exports = {
  generateToken,
};