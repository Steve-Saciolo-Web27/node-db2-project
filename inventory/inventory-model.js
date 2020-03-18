const db = require('../data/db-config')

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
}

function get() {
  return db('inventory')
}

function getById(id) {
  return db('inventory')
    .where({ id })
    .first()
}

function insert(car) {
  return db('inventory')
    .insert(car)
    .then(ids => {
      return getById(ids[0])
    })
}

function update(id, changes) {
  return db('inventory')
    .where({ id })
    .update(changes)
    .then(res => {
      return getById(id)
    })
}

function remove(id) {
  return db('inventory')
    .where('id', id)
    .del()
}
