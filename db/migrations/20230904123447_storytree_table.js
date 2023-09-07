exports.up = function(knex) {
    return knex.schema.createTable('storytree', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('genre').nullable();
      table.string('emotion').nullable();
      table.text('complete_story').notNullable();
      table.timestamp('completed_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('storytree');
  };