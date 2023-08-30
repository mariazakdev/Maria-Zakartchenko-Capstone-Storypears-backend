exports.up = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.uuid('id').alter().defaultTo(null);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('story_contents', function(table) {
      table.uuid('id').alter().defaultTo('1');
    });
  };
  