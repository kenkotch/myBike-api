exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cyclists').del()
    .then(function () {
      // Inserts seed entries
      return knex('cyclists').insert([
        {id: 1, email: 'ken.kotch@gmail.com' , token: 'token'},
        {id: 2, email: 'sean.lemberg@gmail.com' , token:'token'},
        {id: 3, email: 'kashi.halma@gmail.com' , token:'token'}
      ]);
    });
};
