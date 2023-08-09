const storiesData = require("../seed_data/stories");

exports.seed = function (knex) {
  return knex("stories")
    .del()
    .then(function () {
      return knex("stories").insert(storiesData);
    });
};
