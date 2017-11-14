
exports.up = function(knex, Promise) {
  return knex.schema.createTable('components', (table)=>{
    table.increments('id').primary();
    table.text('name').notNullable().defaultTo('')
    table.integer('total_mileage').notNullable();
    table.integer('bike_id').references('id').inTable('bikes').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('components')
};
