exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password2', 20).notNullable().defaultTo('default_password2').alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('password2', 20).notNullable().alter();
    });
  };
  