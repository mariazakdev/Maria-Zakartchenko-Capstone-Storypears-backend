exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 100).alter();  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 60).alter(); 
    });
  };