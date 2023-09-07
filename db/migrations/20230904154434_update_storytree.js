exports.up = function(knex) {
    return knex.schema.table('storytree', (table) => {
        table.string('complete_story').defaultTo('default_value').alter();  
    });
};

exports.down = function(knex) {
    return knex.schema.table('storytree', (table) => {
        table.string('complete_story').alter();  
    });
};
