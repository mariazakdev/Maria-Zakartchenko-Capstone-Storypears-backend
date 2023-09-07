const express = require('express');
const router = express.Router();
const feelingsController = require('../controllers/feelingsControllers');

router.get('/', feelingsController.index);
router.get('/:id', feelingsController.getFeeling);
router.post('/', feelingsController.createFeeling);
router.put('/:id', feelingsController.updateFeeling);
router.delete('/:id', feelingsController.deleteFeeling);

module.exports = router;