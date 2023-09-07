const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/storiesController');

//Routes for stories
//Subject to change as site develops
router.get('/', storiesController.index); // list of stories
router.get('/:id', storiesController.singleStory); // each story
router.post('/', storiesController.createStory); // original writer
router.put('/:id', storiesController.updateStory); // second writer string update 
router.delete('/:id', storiesController.deleteStory); // users delete story, I delete placeholder stories

module.exports = router;