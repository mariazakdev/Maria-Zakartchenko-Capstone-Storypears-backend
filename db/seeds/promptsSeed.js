const promptsData = require('../seed_data/prompts');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('prompts').del()
    .then(function () {
      // Inserts seed entries
      return knex('prompts').insert(promptsData);
    });
};