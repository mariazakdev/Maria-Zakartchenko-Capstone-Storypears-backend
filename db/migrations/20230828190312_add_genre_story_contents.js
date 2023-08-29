exports.up = function(knex) {
  return knex.schema.createTable('story_contents', function(table) {
    table.uuid('id').primary(); 
    table.uuid('story_id').notNullable();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users'); 
    table.string('title');
    table.text('content');
    table.string('genre'); 
    table.string('feeling'); 
    table.timestamp(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('story_contents');
};