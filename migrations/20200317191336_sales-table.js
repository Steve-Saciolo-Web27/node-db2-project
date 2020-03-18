exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments()

    tbl.string('Price_Sold')
    tbl.foreign('Price_Sold').references('inventory.VIN')

    tbl.string('Sales_Tax')
    tbl.foreign('Sales_Tax').references('inventory.VIN')

    tbl.string('Sales_Profit')
    tbl.foreign('Sales_Profit').references('inventory.VIN')

    tbl.string('Sold_By')
    tbl.foreign('Sold_By').references('inventory.VIN')

    tbl
      .foreign('Sold_By')
      .references('VIN')
      .inTable('inventory')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('inventory')
}
