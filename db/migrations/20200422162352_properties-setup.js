exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("properties").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("properties", function(table) {
          table.string("p_id").notNullable();
          table.string("address");
          table.string("city");
          table.string("zip");
          table.string("zip4");
          table.string("type");
          table.string("x");
          table.string("y");
          table.string("owner");
          table.string("owner_address");
        });
      }
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.hasTable("properties").then(function(exists) {
      if (exists) {
        return knex.schema.dropTable("properties");
      }
    })
  ]);
};

