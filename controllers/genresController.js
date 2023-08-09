const knex = require('../db/db'); 

exports.getGenres = (req, res) => {
  knex('genres')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error('Error retrieving genres:', err);
      res.status(500).send('Internal Server Error');
    });
};

exports.getGenreById = (req, res) => {
  const { id } = req.params;
  knex('genres')
    .where({ id })
    .first()
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ error: `Genre with id: ${id} is not found` });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(`Error retrieving genre ${id}:`, err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};
