exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('users');
    if (!tableExists) {
      await knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable().defaultTo('default_username');
        table.string('githubId', 30).nullable(); 
        table.string('googleId', 30).unique().nullable(); 
        table.string('facebookId', 30).unique().nullable(); 
        table.string('avatar_url', 255).nullable(); 
        table.binary('image').nullable();
        table.string('password', 60).notNullable().defaultTo('default_password');
        table.string('email', 30).notNullable().defaultTo('default@email.com');
        table.string('first_name', 50).nullable();
        table.string('last_name', 50).nullable();
        table.string('pen_first_name', 50).nullable();
        table.string('pen_last_name', 50).nullable();
        table.text('bio').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    } else {
      // If the table already exists, we can simply remove the column
      await knex.schema.table('users', function(table) {
        table.dropColumn('password2');
      });
    }
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  