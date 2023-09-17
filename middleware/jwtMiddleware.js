const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const validateToken = (req, res, next) => {
    const token = req.cookies.pearAccessToken;
    
    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Failed to authenticate token." });
        }

        req.user = { id: decoded.userId };
        
        next();
    });
}

module.exports = { validateToken };
