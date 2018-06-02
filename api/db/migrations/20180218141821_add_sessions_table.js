exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Sessions', function(table) {
    table.increments('id');
    table
      .integer('spotId')
      .references('id')
      .inTable('Spots');
    table
      .integer('sailId')
      .references('id')
      .inTable('Sails');
    table
      .integer('boardId')
      .references('id')
      .inTable('Boards');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Sessions');
};
