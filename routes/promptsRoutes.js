const express = require('express');
const router = express.Router();
const promptsController = require('../controllers/promptsControllers');

//Routes for prompt
//Subject to change as site develops
router.get('/', promptsController.index); // list of prompts
router.get('/:id', promptsController.singlePrompt); // each prompt for writing page
router.post('/', promptsController.createPrompt); // add a prompt
router.put('/:id', promptsController.updatePrompt); // for editing prompts 
router.delete('/:id', promptsController.deletePrompt); // prompt is deleted after it is used in story mode

module.exports = router;
