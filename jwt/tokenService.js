const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const createTokens = (user) => {
    const accessToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

const validateToken = (req, res, next) => {
    const token = req.cookies.pearAccessToken || req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    const tokenToVerify = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(tokenToVerify, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Failed to authenticate token." });
        }

        req.user = { id: decoded.userId };

        next();
    });
};

module.exports = { createTokens, validateToken };
