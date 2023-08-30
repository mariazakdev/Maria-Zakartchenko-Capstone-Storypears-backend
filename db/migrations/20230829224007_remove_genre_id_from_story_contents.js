exports.up = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.dropColumn('genre_id');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.uuid('genre_id');
    });
  };
  
