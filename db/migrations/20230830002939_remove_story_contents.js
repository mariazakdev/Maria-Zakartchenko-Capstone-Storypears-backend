exports.up = function (knex) {
    return knex.schema.dropTable('story_contents');
  };
  
  exports.down = function (knex) {
    return knex.schema.createTable('story_contents', function (table) {
      // Define the structure of the story_contents table in the "down" migration
      table.uuid('id').primary().notNullable();
      table.uuid('story_id').notNullable();
      table.text('content').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('emotion', 255);
      table.integer('user_id').unsigned().notNullable();
      table.string('genre', 255);
      table.string('title', 255).notNullable();
      
      // Define foreign key constraint on user_id
      table.foreign('user_id').references('id').inTable('users');
    });
  };
  