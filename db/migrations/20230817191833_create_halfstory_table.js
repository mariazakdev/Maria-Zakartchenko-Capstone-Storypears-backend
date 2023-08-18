exports.up = function (knex) {
    return knex.schema.createTable("halfstories", function (table) {
      table.uuid("id").primary().notNullable();
      table.string("title", 100).notNullable();
      table.date("date").nullable();
      table.uuid("user1_id").nullable().references("id").inTable("users");
      table.uuid("user2_id").nullable().references("id").inTable("users");
      table.string("genre_name", 50).nullable();
      table.uuid("genre_id").nullable();
      table.text("story").nullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("halfstories");
};