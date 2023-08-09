exports.up = function (knex) {
  return knex.schema.createTable('genres', function (table) {
    table.uuid('genre_id').primary().notNullable();
    table.string('genre_name', 50).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('genres');
};