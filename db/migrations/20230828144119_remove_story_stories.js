exports.up = function (knex) {
    return knex.schema.table('stories', function (table) {
      // Remove the 'story' column
      table.dropColumn('story');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('stories', function (table) {
      // Recreate the 'story' column
      table.text('story').nullable();
    });
  };
  