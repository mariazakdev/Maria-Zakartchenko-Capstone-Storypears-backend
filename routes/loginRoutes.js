const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.getAllUsers);
router.get('/:id', loginController.getUserById);
router.post('/', loginController.createUser);
router.put('/:id', loginController.updateUser);
router.delete('/:id', loginController.deleteUser);

module.exports = router;
