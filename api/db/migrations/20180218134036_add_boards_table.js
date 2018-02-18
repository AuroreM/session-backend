exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Boards', function(table) {
    table.increments('id');
    table.string('name');
    table.string('type');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Boards');
};
