exports.up = function(knex) {
    return knex.schema.createTable('full_stories', (table) => {
        table.uuid('id').primary();
        table.jsonb('stories_data').notNullable();
        table.timestamps(true, true); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('full_stories');
};
