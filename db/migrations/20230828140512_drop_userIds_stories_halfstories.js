exports.up = function (knex) {
  return knex.schema.createTable("your_table_name_here", function (table) {
    table.char("id", 36).notNullable().primary();
    table.varchar("title", 100).notNullable();
    table.date("date");
    table.varchar("genre_name", 50);
    table.char("genre_id", 36);
    table.timestamp("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updated_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.text("story");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("your_table_name_here");
};
