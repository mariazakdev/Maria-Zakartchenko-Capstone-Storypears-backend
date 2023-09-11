exports.up = function(knex) {
    return knex.schema.table('storybranch', (table) => {
        table.text('content').nullable();  
        table.integer('user_id').unsigned().references('id').inTable('users'); 
    });
};

exports.down = function(knex) {
    return knex.schema.table('storybranch', (table) => {
        table.dropColumn('content'); 
        table.dropColumn('user_id');  
    });
};
