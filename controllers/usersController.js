const { v4: uuidv4 } = require('uuid');
const knex = require('../db/db');

exports.getAllUsers = (req, res) => {
  knex('users')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error('Error retrieving users:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  knex('users')
    .where({ id })
    .first()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: `User with id: ${id} not found` });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(`Error retrieving user ${id}:`, err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { bio, pen_first_name, pen_last_name, links, username } = req.body;

  const updateData = {};

  if (bio !== undefined) {
    updateData.bio = bio;
  }

  if (pen_first_name !== undefined) {
    updateData.pen_first_name = pen_first_name;
  }

  if (pen_last_name !== undefined || pen_last_name === null) {
    // Update pen_last_name only if it's provided or explicitly set to null
    updateData.pen_last_name = pen_last_name;
  }

  if (username !== undefined) {
    updateData.username = username;
  }

  // Assuming links is an array of strings
  if (Array.isArray(links)) {
    // Handle updating the links if provided
    // First, delete existing links for the user
    knex('users')
      .where('id', id)
      .update({ links: null }) // Clear existing links
      .then(() => {
        // Then, insert new links
        return knex('users')
          .where('id', id)
          .update({ links: JSON.stringify(links) });
      })
      .then(() => {
        // Update other fields
        return knex('users')
          .where('id', id)
          .update(updateData);
      })
      .then(() => {
        res.json({ message: 'User updated successfully.' });
      })
      .catch((err) => {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    // Update user's bio, pen names, and username (if provided), but not links
    knex('users')
      .where('id', id)
      .update(updateData)
      .then(() => {
        res.json({ message: 'User updated successfully.' });
      })
      .catch((err) => {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }
};



exports.deleteUser = (req, res) => {
  const { id } = req.params;
  
  knex('users')
    .where('id', id)
    .del()
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};
