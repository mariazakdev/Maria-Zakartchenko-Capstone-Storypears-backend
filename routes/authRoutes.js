const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const { validateToken } = require("../jwt/tokenService"); 

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', validateToken, authController.profile);
router.post('/logout', authController.logout);

module.exports = router;
