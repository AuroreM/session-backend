exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Sails')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Sails').insert([
        { id: 1, name: 'Blow 3.5', wind: 35 },
        { id: 2, name: 'Blow 4.0', wind: 30 },
        { id: 3, name: 'Blow 4.5', wind: 25 },
        { id: 4, name: 'Blow 5.0', wind: 20 },
        { id: 5, name: 'Blow 5.7', wind: 10 },
        { id: 6, name: 'Point 7 ack 7.2', wind: 0 },
      ]);
    });
};
