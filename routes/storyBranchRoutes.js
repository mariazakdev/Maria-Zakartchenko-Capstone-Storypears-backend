const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyBranchControllers');

router.post('/', controller.createStoryBranch);
router.get('/:id', controller.getStoryBranch);
router.put('/:id', controller.updateStoryBranch);
router.delete('/:id', controller.deleteStoryBranch);
router.post('/:id/contribution', controller.addContribution);

module.exports = router;