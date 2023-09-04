const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyTreeControllers');

router.post('/', controller.createStoryTree);
router.get('/:id', controller.getStoryTree);
router.delete('/:id', controller.deleteStoryTree);

module.exports = router;