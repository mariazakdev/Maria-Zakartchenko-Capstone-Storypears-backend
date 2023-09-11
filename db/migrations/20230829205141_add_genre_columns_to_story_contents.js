exports.up = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.string('genre');
  
      table
        .uuid('genre_id')
        .notNullable()
        .references('genre_id')
        .inTable('genres'); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.dropColumn('genre');
  
      table.dropForeign(['genre_id']);
      table.dropColumn('genre_id');
    });
  };
  