exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Spots', function(table) {
    table.increments('id');
    table.string('name');
    table.string('latitude');
    table.string('longitude');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Spots');
};
