exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Sails', function(table) {
    table.increments('id');
    table.string('name');
    table.string('wind');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Sails');
};
