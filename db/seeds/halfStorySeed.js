const halfStoryData = require('../seed_data/halfStory');

exports.seed = function (knex) {
  return knex('halfstories')
    .del()
    .then(function () {
      return knex('halfstories').insert(halfStoryData);
    });
};