const genresData = require("../seed_data/genres"); 

exports.seed = function (knex) {
  return knex("genres")
    .del()
    .then(function () {
      return knex("genres").insert(genresData);
    });
};
