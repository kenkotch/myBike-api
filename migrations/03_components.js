exports.up = function(knex, Promise) {
  return knex.schema.createTable('components', (table)=>{
    table.increments('id').primary();
    table.integer('chain').notNullable()
    table.integer('tires').notNullable()
    table.integer('brake_pads').notNullable()
    table.integer('bike_id').references('id').inTable('bikes').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('components')
};
