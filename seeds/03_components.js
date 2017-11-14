
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      // Inserts seed entries
      return knex('components').insert([
        {id: 1, chain: 100, tires: 100, brake_pads: 100, bike_id: 1},
        {id: 2, chain: 100, tires: 100, brake_pads: 100, bike_id: 2},
        {id: 3, chain: 100, tires: 100, brake_pads: 100, bike_id: 3}
      ]);
    });
};
