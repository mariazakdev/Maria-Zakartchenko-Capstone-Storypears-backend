exports.up = function(knex) {
    return knex.schema.createTable('storybranch_contributions', (table) => {
      table.increments('id').primary();
      table.integer('storybranch_id').unsigned().notNullable();
      table.foreign('storybranch_id').references('id').inTable('storybranch').onDelete('CASCADE');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.text('content').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('storybranch_contributions');
  };