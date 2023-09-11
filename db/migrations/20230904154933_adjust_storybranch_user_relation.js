exports.up = function(knex) {
    return knex.schema.table('storybranch', (table) => {
        table.dropForeign('user_id');
        table.integer('user_id').unsigned().nullable().alter();
        table.foreign('user_id').references('users.id').onDelete('SET NULL');
    });
};

exports.down = function(knex) {
    return knex.schema.table('storybranch', (table) => {
        table.dropForeign('user_id');
        table.integer('user_id').unsigned().notNullable().alter(); 
        table.foreign('user_id').references('users.id');
    });
};
