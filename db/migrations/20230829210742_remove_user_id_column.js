exports.up = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      // Add the 'user_id' column as an integer
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
  
      // Add the 'genre_id' column as a UUID
      table
        .uuid('genre_id')
        .notNullable()
        .references('genre_id')
        .inTable('genres');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      // Drop the 'user_id' column
      table.dropColumn('user_id');
  
      // Drop the 'genre_id' column
      table.dropColumn('genre_id');
    });
  };
  