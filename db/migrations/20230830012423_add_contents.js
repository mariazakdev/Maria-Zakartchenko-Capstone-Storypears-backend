exports.up = function(knex) {
    return knex.schema.createTable('story_contents', function(table) {
      // Define an 'id' column as the primary key with auto-increment
      table.increments('id').unsigned().primary();
      
      // Define a 'user_id' column as a foreign key referencing 'id' in 'users' table
      table.integer('user_id').unsigned().notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE'); // Optional: Define the delete behavior
      
      // Define other columns for 'story_contents' table
      table.uuid('story_id').notNullable();
      table.string('emotion', 255);
      table.string('genre', 255).notNullable();
      table.timestamps(true, true); // Adds 'created_at' and 'updated_at' timestamp columns
      table.string('title', 255).notNullable();
      table.text('content'); // Add more columns as needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('story_contents');
  };