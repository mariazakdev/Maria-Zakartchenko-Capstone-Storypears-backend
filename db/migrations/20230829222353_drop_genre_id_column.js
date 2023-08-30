exports.up = function (knex) {
    return knex.schema.alterTable('story_contents', function (table) {
      table.dropColumn('genre_id'); // Drop the genre_id column
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('story_contents', function (table) {
      table.string('genre_id', 36).notNullable().primary(); // Recreate the genre_id column
    });
  };
  