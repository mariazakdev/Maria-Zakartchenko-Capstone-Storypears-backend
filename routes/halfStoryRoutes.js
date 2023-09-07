const express = require('express');
const router = express.Router();
const halfStoryController = require('../controllers/halfStoryControllers');

// Routes for stories waiting for partners
router.get('/', halfStoryController.index); 
router.get('/:id', halfStoryController.singleHalfStory); 
router.post('/', halfStoryController.createHalfStory);  
router.put('/:id', halfStoryController.updateHalfStory);  
router.delete('/:id', halfStoryController.deleteHalfStory);  

module.exports = router;