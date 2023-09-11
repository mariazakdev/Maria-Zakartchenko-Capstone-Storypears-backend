exports.up = function (knex) {
    return knex.schema.alterTable('story_contents', (table) => {
      table.string('genre', 255).nullable().alter();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('story_contents', (table) => {
      table.string('genre', 255).notNullable().alter();
    });
  };