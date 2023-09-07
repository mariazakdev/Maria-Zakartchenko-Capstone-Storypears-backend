const feelingsData = require("../seed_data/feelings");

exports.seed = function (knex) {
  console.log("Seeding feelings table...");
  return knex("feelings")
    .del()
    .then(function () {
      console.log("Inserting seed data...");
      return knex("feelings").insert(feelingsData);
    })
    .then(function () {
      console.log("Seed data inserted successfully.");
    })
    .catch(function (error) {
      console.error("Error seeding data:", error);
    });
};