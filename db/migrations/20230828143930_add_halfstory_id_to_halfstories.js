exports.up = function(knex) {
    return knex.schema.table('halfstories', function(table) {
      table.uuid('halfstory_id').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('halfstories', function(table) {
      table.dropColumn('halfstory_id');
    });
  };
  