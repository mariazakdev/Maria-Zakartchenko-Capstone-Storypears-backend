
      exports.up = function(knex) {
        return knex.schema.hasTable('story_contents').then((exists) => {
          if (!exists) {
            return knex.schema.createTable('story_contents', function(table) {
              table.uuid('id').primary();
              table.uuid('story_id').notNullable();
              table.integer('user_id').unsigned().notNullable().defaultTo(1);
              table.string('genre');
              table.string('title'); 
              table.text('content');
              table.timestamps(true, true);
            });
          }
        });
      };
      
      exports.down = function(knex) {
        return knex.schema.dropTableIfExists('story_contents');
      };