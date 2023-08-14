const usersData = require("../seed_data/users");
exports.seed = async function (knex) {

  await knex('users').del();

  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert(usersData);
    });
};
