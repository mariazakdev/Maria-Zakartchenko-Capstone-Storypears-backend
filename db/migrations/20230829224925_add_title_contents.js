exports.up = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.string('title');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.dropColumn('title');
    });
  };
  