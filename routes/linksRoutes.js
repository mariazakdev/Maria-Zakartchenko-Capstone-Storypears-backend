const express = require('express');
const router = express.Router();
const linksController = require('../controllers/linksController');


router.get('/', linksController.index); 
router.get('/:id', linksController.singleLink); 
router.post('/', linksController.createLink); 
router.put('/:id', linksController.updateLink); 
router.delete('/:id', linksController.deleteLink); 

module.exports = router;