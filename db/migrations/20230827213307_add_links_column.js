exports.up = function (knex) {
    return knex.schema.table('users', function (table) {
      table.json('links').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('users', function (table) {
      table.dropColumn('links');
    });
  };