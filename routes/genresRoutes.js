const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/', genresController.getGenres);
router.get('/:id', genresController.getGenreById);

module.exports = router;
