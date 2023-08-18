exports.up = function(knex) {
    return knex.schema.alterTable('halfstories', function(table) {
      table.dropForeign('user1_id');
      table.dropForeign('user2_id');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('halfstories', function(table) {
      table.foreign('user1_id').references('id').inTable('users');
      table.foreign('user2_id').references('id').inTable('users');
    })
  };

  