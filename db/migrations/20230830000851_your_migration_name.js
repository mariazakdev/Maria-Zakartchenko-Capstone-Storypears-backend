
exports.up = function (knex) {
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('your_table_name', function (table) {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    });
  };
  