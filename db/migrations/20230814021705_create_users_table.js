exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('users');
  if (!tableExists) {
    await knex.schema.createTable('users', function(table) {
      table.uuid('id').primary().notNullable();
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
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  }
  // Table for user adding links to their profile
  await knex.schema.createTable('links', function(table) {
    table.uuid('id').primary();
    table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
    table.string('link', 255).nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('links').dropTableIfExists('users');
};
