
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cyclists', (table)=>{
    table.increments('id').primary()
    table.varchar('email').notNullable().unique()
    table.varchar('token')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cyclists')
};
