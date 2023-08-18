const passport = require('passport');

// Route to start GitHub authentication
router.get('/auth/github', passport.authenticate('github'));

// GitHub authentication callback route
router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/success', 
    failureRedirect: '/login'    
  })
);

module.exports = router;const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.getAllUsers);
router.get('/:id', loginController.getUserById);
router.post('/', loginController.createUser);
router.put('/:id', loginController.updateUser);
router.delete('/:id', loginController.deleteUser);

module.exports = router;
