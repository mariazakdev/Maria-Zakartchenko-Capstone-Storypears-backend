const express = require('express');
const router = express.Router();
const storyContentsController = require('../controllers/storyContentsController');

// Create a new story content
router.post('/', storyContentsController.createStoryContent);

// Get all story contents
router.get('/', storyContentsController.getAllStoryContents);

// Get a single story content by ID
router.get('/:id', storyContentsController.getStoryContentById);

// Update a story content by ID
router.put('/:id', storyContentsController.updateStoryContent);

// Delete a story content by ID
router.delete('/:id', storyContentsController.deleteStoryContent);

module.exports = router;