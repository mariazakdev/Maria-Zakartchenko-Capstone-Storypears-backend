exports.up = function (knex) {
    return knex.schema.createTable('feelings', function (table) {
        table.uuid('id').primary().notNullable();
      table.text('sentence').notNullable(); 
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('feelings');
  };