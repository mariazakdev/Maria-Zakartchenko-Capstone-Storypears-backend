exports.up = function (knex) {
    return knex.schema.table('users', function (table) {
      table.dropColumn('image');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('users', function (table) {
      table.blob('image'); // Adjust the data type if necessary
    });
  };
  