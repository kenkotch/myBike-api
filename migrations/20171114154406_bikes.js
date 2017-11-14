
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bikes', (table)=>{
    table.increments('id').primary();
    table.text('name').notNullable().defaultTo('')
    table.integer('total_mileage').notNullable();
    table.integer('cyclist_id').references('id').inTable('cyclists').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bikes')
};
