/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('stories');
  if (!tableExists) {
    return knex.schema.createTable('stories', function (table) {
      table.increments('id').primary();
      table.string('title', 100).notNullable();
      table.date('story_date').notNullable();
      table.integer('user1_id').notNullable();
      table.integer('user2_id').notNullable();
      table.string('genre', 50).nullable();
      table.text('story').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stories');
};