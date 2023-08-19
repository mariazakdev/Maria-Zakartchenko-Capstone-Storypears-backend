exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 20).nullable().alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 20).notNullable().alter();
    });
  };