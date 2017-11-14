
exports.seed = function(knex, Promise) {
  return knex('bikes').del()
    .then(function () {
      return knex('bikes').insert([
        {id: 1, name: 'gray', total_mileage: 100, cyclist_id: 1},
        {id: 2, name: 'blue', total_mileage:100, cyclist_id: 2},
        {id: 3, name: 'purple', total_mileage:100, cyclist_id: 3}
      ]);
    });
};
