const express = require('express');
const router = express.Router();
const fullstoriesController = require('../controllers/fullstoriesControllers');

router.get('/', fullstoriesController.index);
router.get('/:id', fullstoriesController.getFullStory);
router.post('/', fullstoriesController.createFullStory);
router.delete('/:id', fullstoriesController.deleteFullStory);

module.exports = router;