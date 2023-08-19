exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('users');
    if (!tableExists) {
      await knex.schema.createTable('users', function(table) {
        table.uuid('id').primary().notNullable(); 
        table.string('github_id'); // order of github_id pushed up
        table.string('avatar_url').notNullable();// Added avatar_url
        table.string('username', 20).notNullable().unique();
        table.binary('image').nullable();
        table.string('email', 30).notNullable().unique();
        table.string('password', 100).notNullable();
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