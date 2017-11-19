
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emails', (table)=>{
    table.increments('id').primary()
    table.varchar('email').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emails')
};
