const knex = require('../db/db'); // Import your Knex.js instance
const bcrypt = require('bcryptjs');

const createNewUser = async (data) => {
  try {
    // Check if the email already exists
    const isEmailExist = await checkExistEmail(data.email);
    if (isEmailExist) {
      throw new Error(`This email "${data.email}" has already existed. Please choose another email.`);
    } else {
      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(data.password, salt);

      // Create a new user record using Knex.js
      const userItem = {
        fullName: data.fullname,
        email: data.email,
        password: hashedPassword,
        firstName: data.first_name,
        lastName: data.last_name,
        penFirstName: data.pen_first_name,
        penLastName: data.pen_last_name,
        bio: data.bio,
      };

      await knex('users').insert(userItem);

      return 'Create a new user successful';
    }
  } catch (error) {
    throw error;
  }
};

const checkExistEmail = async (email) => {
  try {
    const user = await knex('users').where('email', email).first();
    return !!user; // Return true if the user exists, false otherwise
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
};
