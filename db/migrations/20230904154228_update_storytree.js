exports.up = function(knex) {
    return knex.schema.table('storytree', (table) => {
        table.text('content').nullable();  
    });
};

exports.down = function(knex) {
    return knex.schema.table('storytree', (table) => {
        table.dropColumn('content');  
    });
};
