exports.seed = function(knex, Promise) {
  return knex('Boards')
    .del()
    .then(function() {
      return knex('Boards').insert([
        { id: 1, name: 'Tabou DC 75', type: 'waves' },
        { id: 2, name: 'Fanatic Quad 87', type: 'waves' },
        { id: 3, name: 'Tabou DC 96', type: 'glassy' },
        { id: 4, name: 'Tabou Twister 100', type: 'glassy' },
        { id: 5, name: 'Windfoil', type: 'glassy' },
      ]);
    });
};
