const { seedData } = require("../seed_data/storyContents");

exports.seed = function (knex) {
  return knex("story_contents")
    .del()
    .then(function () {
      return knex("story_contents").insert(seedData);
      
    });
};
