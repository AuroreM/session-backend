exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Sessions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Sessions').insert([
        { id: 1, sailId: '1', boardId: '2', spotId: '3' },
        { id: 2, sailId: '6', boardId: '5', spotId: '1' },
        { id: 3, sailId: '1', boardId: '2', spotId: '1' },
      ]);
    });
};
