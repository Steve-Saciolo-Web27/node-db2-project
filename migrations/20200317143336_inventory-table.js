// Describes the changes => knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable('inventory', tbl => {
    // Generates ID column and Auto-increments
    tbl.increments() //(PK)

    tbl
      .string('VIN', 17)
      .unique()
      .notNullable()
      .index()

    tbl.string('Make', 30).notNullable()

    tbl.string('Model', 30).notNullable()

    tbl.string('Mileage', 15).notNullable()

    tbl.string('Trans', 30)

    tbl.string('Title', 300)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('inventory')
}
