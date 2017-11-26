
exports.seed = function(knex, Promise) {
  return knex('bikes').del()
    .then(function () {
      return knex('bikes').insert([
        {id: 1, name: 'Magic Unicorn Cycle', total_mileage: 2250, cyclist_id: 1},
        {id: 2, name: 'Super Bike Deluxe', total_mileage:3000, cyclist_id: 2},
        {id: 3, name: 'Indigo Realities', total_mileage:1100, cyclist_id: 3}
      ]);
    });
};
