/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('donationstable', (table) => {
    table.increments('id').primary()
    table.string('political_party')
    table.integer('date_received')
    table.string('donor')
    table.string('address')
    table.float('lat')
    table.float('lon')
    table.integer('total')
    table.string('sector')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('donationstable')
}
