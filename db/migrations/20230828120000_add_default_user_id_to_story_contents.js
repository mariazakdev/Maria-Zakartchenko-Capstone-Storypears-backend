exports.up = function (knex) {
    return knex.schema.createTable('story_contents', function (table) {
      table.uuid('id').primary();
      table.uuid('story_id').notNullable();
      table.integer('user_id').unsigned().notNullable().defaultTo(1); // Set a default value
      table.text('content');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('story_contents');
  };
  