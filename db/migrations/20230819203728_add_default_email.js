exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('email', 30).notNullable().defaultTo('default@email.com').alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('email', 30).notNullable().alter();
    });
  };
  