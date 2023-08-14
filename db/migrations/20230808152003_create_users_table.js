/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('users');
  if (!tableExists) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
    table.string('username', 20).notNullable();
    table.binary('image').nullable(); 
    table.string('password', 20).notNullable();
    table.string('password2', 20).notNullable();
    table.string('email', 30).notNullable();
    table.string('first_name', 50).nullable();
    table.string('last_name', 50).nullable();
    table.string('pen_first_name', 50).nullable();
    table.string('pen_last_name', 50).nullable();
    table.text('bio').nullable();
    table.string('link', 255).nullable();
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
  return knex.schema.dropTableIfExists('users');
};