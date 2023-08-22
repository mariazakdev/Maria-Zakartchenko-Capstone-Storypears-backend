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

// exports.createUser = (req, res) => {
//   const { username, email, password, password2, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;

//   if (!username || !email || !password || !password2 || !pen_first_name) {
//     return res.status(400).json({ error: 'Username, password, and email are required' });
//   }
//   knex('users')
//     .insert({
//       email,
//       password,
//       first_name,
//       last_name,
//       pen_first_name,
//       pen_last_name,
//       bio
//     })
//     .then(() => {
//       res.status(201).json({ success: true });
//     })
//     .catch((err) => {
//       console.error('Error creating a user:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// };

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  
  knex('users')
    .where('id', id)
    .update({
      username,
      email,
    })
    .then(() => {
      res.json({ message: 'User updated successfully.' });
    })
    .catch((err) => {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
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
