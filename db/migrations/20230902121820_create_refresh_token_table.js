exports.up = function(knex) {
  return knex.schema.createTable('refresh_tokens', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
    table.string('token').notNullable();
    table.timestamp('expires_at').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('refresh_tokens');
};