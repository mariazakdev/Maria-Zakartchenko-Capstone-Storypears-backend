const knex = require('../db/db');
const bcrypt = require('bcryptjs');

const handleLogin = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return true;
      } else {
        throw new Error(`The password that you've entered is incorrect`);
      }
    } else {
      throw new Error(`This user email "${email}" doesn't exist`);
    }
  } catch (error) {
    throw error;
  }
};
// This is to local incoming login user
const findUserByEmail = async (email) => {
  try {
    const user = await db('users').where({ email }).first();
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await db('users').where({ id }).first();
    return user;
  } catch (error) {
    throw error;
  }
};

const comparePassword = async (password, userObject) => {
  try {
    const isMatch = await bcrypt.compare(password, userObject.password);
    if (isMatch) {
      return true;
    } else {
      return `The password that you've entered is incorrect`;
    }
  } catch (error) {
    throw error;
  }
};


module.exports = {
  handleLogin,
  findUserByEmail,
  findUserById,
  comparePassword
};