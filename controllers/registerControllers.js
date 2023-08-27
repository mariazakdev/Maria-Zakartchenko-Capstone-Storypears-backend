
const knex = require('../db/db');
const authUtils = require('../utils/authUtils');
const jwt = require('jsonwebtoken');
const config = require('../config');

async function register(req, res) {
  try {
    const { email, password, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;
    const hashedPassword = await authUtils.hashPassword(password);
    const newUser = {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      pen_first_name,
      pen_last_name,
      bio
    };

    const [userId] = await knex('users').insert(newUser);
    const createdUser = await knex('users').where({ id: userId }).first();

    const token = jwt.sign({ userId: createdUser.id }, config.jwtSecret, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true, 
      secure: true, 
      sameSite: 'strict', 
    });

    return res.status(201).json({ user: createdUser, token: token });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed.' });
  }
}

module.exports = {
  register,
};