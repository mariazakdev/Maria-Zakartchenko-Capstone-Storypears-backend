exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 20).notNullable().defaultTo('new_default_password').alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password', 20).notNullable().defaultTo('old_default_password').alter();
    });
  };
  