const seedData = require("../seed_data/full_stories"); 

exports.seed = function(knex) {
    return knex('full_stories').del()
      .then(function () {
        return knex('full_stories').insert(seedData.map(item => ({
          ...item,
          stories_data: JSON.stringify(item.stories_data)
        })));
      });
  };