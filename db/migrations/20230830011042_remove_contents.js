exports.up = function(knex) {
    return knex.schema.dropTableIfExists('story_contents');
  };
  
  exports.down = function(knex) {

  };
  