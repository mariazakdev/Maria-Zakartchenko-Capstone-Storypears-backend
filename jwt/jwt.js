const { sign, verify } = require("jsonwebtoken");
const { jwtSecret } = require('../config'); 

const createTokens = (user) => {
  const accessToken = sign(
    { id: user.id },
    jwtSecret
  );
    // no expiration time, return with refresh token
  return accessToken;
};






const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const decodedToken = verify(accessToken, jwtSecret);

    // Set the decoded user data to req.user
    req.user = decodedToken;

    return next();
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};


module.exports = { createTokens, validateToken };