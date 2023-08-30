exports.up = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('story_contents', function (table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
    });
  };
  