exports.up = function(knex) {
  return knex.schema.hasColumn('sessions', 'user_id')
    .then(exists => {
      if (!exists) {
        return knex.schema.alterTable('sessions', function(table) {
          table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
        });
      }
    })
    .then(() => {
      return knex.schema.hasColumn('sessions', 'session_id');
    })
    .then(exists => {
      if (!exists) {
        return knex.schema.alterTable('sessions', function(table) {
          table.string('session_id').notNullable().unique();
        });
      }
    })
    .then(() => {
      return knex.schema.hasColumn('sessions', 'created_at');
    })
    .then(exists => {
      if (!exists) {
        return knex.schema.alterTable('sessions', function(table) {
          table.timestamp('created_at').defaultTo(knex.fn.now());
        });
      }
    })
    .then(() => {
      return knex.schema.hasColumn('sessions', 'last_accessed_at');
    })
    .then(exists => {
      if (!exists) {
        return knex.schema.alterTable('sessions', function(table) {
          table.timestamp('last_accessed_at').defaultTo(knex.fn.now());
        });
      }
    });
};

exports.down = function(knex) {
  return knex.schema.alterTable('sessions', function(table) {
    table.dropColumn('user_id');
    table.dropColumn('session_id');
    table.dropColumn('created_at');
    table.dropColumn('last_accessed_at');
  });
};
