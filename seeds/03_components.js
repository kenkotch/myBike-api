
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      // Inserts seed entries
      return knex('components').insert([
        {id: 1, chain: 1300, tires: 900, brake_pads: 200, bike_id: 1},
        {id: 2, chain: 1750, tires: 500, brake_pads: 175, bike_id: 2},
        {id: 3, chain: 1000, tires: 600, brake_pads: 225, bike_id: 3}
      ]);
    });
};
