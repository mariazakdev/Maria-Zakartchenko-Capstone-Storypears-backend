exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().defaultTo('default_username');
      table.string('githubId', 30).nullable();
      table.string('googleId', 30).unique().nullable();
      table.string('facebookId', 30).unique().nullable();
      table.string('avatar_url', 255).nullable();
      table.string('password', 60).notNullable().defaultTo('default_password');
      table.string('email', 30).notNullable().defaultTo('default@email.com');
      table.string('first_name', 50).nullable();
      table.string('last_name', 50).nullable();
      table.string('pen_first_name', 50).nullable();
      table.string('pen_last_name', 50).nullable();
      table.text('bio').nullable();
      table.string('link1', 255).nullable(); // links added
      table.string('link3', 255).nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  