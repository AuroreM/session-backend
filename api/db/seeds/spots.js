exports.seed = function(knex, Promise) {
  return knex('Spots')
    .del()
    .then(function() {
      return knex('Spots').insert([
        { id: 1, name: 'Saint Colomban', latitude: 0, longitude: 0 },
        { id: 2, name: 'Sainte Barbe', latitude: 0, longitude: 0 },
        { id: 3, name: 'Kerhillio', latitude: 0, longitude: 0 },
        { id: 4, name: 'Mnetor', latitude: 0, longitude: 0 },
        { id: 5, name: 'Crevettes', latitude: 0, longitude: 0 },
        { id: 6, name: 'Gâvres', latitude: 0, longitude: 0 },
      ]);
    });
};
