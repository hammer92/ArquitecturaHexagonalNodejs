const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')
const remove = require('./delete')
module.exports = (container) => {
  return {
    getAllGps: getAll(container),
    createGps: create(container),
    updateGps: update(container),
    removeGps: remove(container),
  }
}
