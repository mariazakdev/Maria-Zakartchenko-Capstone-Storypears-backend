exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('users');
    if (!tableExists) {
      await knex.schema.createTable('users', function(table) {
        table.uuid('id').primary().notNullable();
        table.string('username', 20).notNullable(); 
        table.string('github_id', 30).nullable(); // New column for github_id
        table.string('avatar_url', 255).nullable(); // New column for avatar_url
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
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };