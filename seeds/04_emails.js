
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      return knex('emails').insert([
        {id: 1, email: 'pizza.camel@gmail.com'},
        {id: 2, email: 'pizza.iguana@gmail.com'},
        {id: 3, email: 'beef.deluxe@gmail.com'}
      ]);
    });
};
