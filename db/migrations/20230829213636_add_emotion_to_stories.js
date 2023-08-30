exports.up = function(knex) {
    return knex.schema.hasColumn('stories', 'emotion').then((exists) => {
      if (!exists) {
        return knex.schema.table('stories', function(table) {
          table.string('emotion').references('name').inTable('emotions');
        });
      }
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('stories', function(table) {
      table.dropColumn('emotion');
    });
  };
  