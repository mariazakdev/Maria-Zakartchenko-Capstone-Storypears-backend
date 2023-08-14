const express = require('express');
const router = express.Router();
const emotionsController = require('../controllers/emotionsController');

//Routes for prompt
//Subject to change as site develops
router.get('/', emotionsController.index);
router.get('/:id', emotionsController.singleEmotion); 

module.exports = router;