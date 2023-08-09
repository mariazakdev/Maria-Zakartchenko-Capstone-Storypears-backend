exports.up = function (knex) {
  return knex.schema.table('stories', function (table) {
    table.uuid('id').notNullable().alter();
    table.string('title', 100).notNullable().alter();
    table.date('date').nullable().alter();
    table.uuid('user1_id').nullable().alter();
    table.uuid('user2_id').nullable().alter();
    table.string('genre', 50).nullable().alter();
    table.uuid('genre_id').nullable().alter(); 
    table.text('story').nullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table('stories', function (table) {
    table.uuid('id').notNullable().alter();
    table.string('title', 100).notNullable().alter();
    table.date('date').nullable().alter();
    table.uuid('user1_id').notNullable().alter();
    table.uuid('user2_id').notNullable().alter();
    table.string('genre', 50).nullable().alter();
    table.uuid('genre_id').notNullable().alter();
    table.text('story').nullable().alter();
  });
};
