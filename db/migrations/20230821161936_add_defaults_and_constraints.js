exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('users');
    if (!tableExists) {
      await knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable().defaultTo('default_username'); // default added 
        table.string('githubId', 30).nullable(); 
        table.string('googleId', 30).unique().nullable(); 
        table.string('facebookId', 30).unique().nullable(); 
        table.string('avatar_url', 255).nullable(); 
        table.binary('image').nullable();
        table.string('password', 20).notNullable().defaultTo('default_password');
        table.string('password2', 20).notNullable().defaultTo('default_password2');
        table.string('email', 30).notNullable().defaultTo('default@email.com');
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
  