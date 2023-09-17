const express = require('express');
const router = express.Router();
const emotionsController = require('../controllers/emotionsControllers');

router.get('/', emotionsController.index);
router.get('/:id', emotionsController.singleEmotion);
router.post('/', emotionsController.createEmotion); 
router.put('/:id', emotionsController.updateEmotion); 
router.delete('/:id', emotionsController.deleteEmotion);

module.exports = router;