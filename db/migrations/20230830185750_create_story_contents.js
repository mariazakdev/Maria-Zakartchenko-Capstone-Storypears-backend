exports.up = function (knex) {
    return knex.schema.createTable('story_contents', function (table) {
      table.increments('id').unsigned().primary();
      table.uuid('story_id').notNullable();
      table.integer('user_id').unsigned(); // Add user_id field
      table.string('emotion', 255);
      table.string('genre', 255);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('title').notNullable();
      table.text('content');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('story_contents');
  };
  