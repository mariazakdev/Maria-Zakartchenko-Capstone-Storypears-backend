exports.up = function(knex) {
    return knex.schema.table('stories', function(table) {
      table.dropColumn('emotion');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('stories', function(table) {
      table.string('emotion').references('name').inTable('emotions');
    });
  };
  