const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const profileController = require('../controllers/profileControllers');

// Profile route, protected by token verification middleware
router.get('/profile', verifyToken, profileController.getProfile);

module.exports = router;