exports.up = function (knex) {
  return knex.schema.createTable('story_contents', function (table) {
    table.increments('id').primary();
    table.uuid('story_id').notNullable();
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users'); // Define the foreign key constraint.
    table.text('content');
    table.string('genre', 255);
    table.string('emotion', 255);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('title', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('story_contents');
};
