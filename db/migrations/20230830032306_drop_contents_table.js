exports.up = function (knex) {
    return knex.schema.dropTableIfExists('contents');
  };
  
  exports.down = function (knex) {
    return knex.schema.createTable('contents', function (table) {
    
    });
  };
  