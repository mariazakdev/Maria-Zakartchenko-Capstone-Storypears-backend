exports.up = function(knex) {
    return knex.schema.alterTable('contents', function(table) {
      // Drop the existing 'genre' and 'emotion' columns
  
      
    });
  };
  
  exports.down = function(knex) {
    return Promise.resolve();
  };
  