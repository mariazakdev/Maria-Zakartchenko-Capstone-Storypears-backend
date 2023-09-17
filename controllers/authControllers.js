const passport = require("passport");
const knex = require("../db/db");
const { createTokens } = require("../jwt/tokenService");
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { username, email, password, first_name, last_name, pen_first_name, pen_last_name, bio } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      username,
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

    const token = jwt.sign({ userId: createdUser.id }, jwtSecret, { expiresIn: '1h' });

    res.cookie('pearAccessToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return res.status(201).json({ user: createdUser, token: token });

  } catch (err) {
    console.error('Registration error:', err.message, err.stack);
    res.status(500).json({ message: 'Registration failed.' });
  }
};

exports.login = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err); 
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    try {
      const tokens = createTokens(user); 
      const accessToken = tokens.accessToken;
      const refreshToken = tokens.refreshToken;

      await knex('refresh_tokens').insert({
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)  // 7 days from now
      });

      res.cookie('pearAccessToken', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      res.cookie('pearRefreshToken', refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      return res.status(200).json({ message: "Authentication successful" });
    } catch (error) {
      console.error("Token generation or storage error:", error);
      return next(error);
    }
  })(req, res, next);
};

exports.profile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await knex('users').where({ id: userId }).first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userProfile = {
      username:user.username,
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      pen_first_name: user.pen_first_name,
      pen_last_name: user.pen_last_name,
      bio: user.bio
    };

    return res.json({ user: userProfile });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('pearAccessToken');
  res.json({ success: true });
};
