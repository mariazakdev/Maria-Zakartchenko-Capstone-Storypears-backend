exports.up = function (knex) {
  return knex.schema.alterTable("halfstories", function (table) {
    // Change the 'id' column to not null
    table.uuid("id").notNullable().alter();

  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("halfstories", function (table) {

  });
};