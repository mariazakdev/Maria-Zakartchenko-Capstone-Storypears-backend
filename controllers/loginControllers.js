const knex = require('../db/db');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists in the database
    const user = await knex('users').where('username', username).first();
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // For now, we're assuming password checking without bcrypt.
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Successful login
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  login,
};