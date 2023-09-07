exports.up = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.dropColumn('user_id');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.integer('user_id').references('id').inTable('users');
    });
  };
  