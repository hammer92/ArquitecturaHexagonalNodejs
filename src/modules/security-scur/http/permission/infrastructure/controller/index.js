const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')
const remove = require('./delete')
module.exports = (container) => {
  return {
    getAllPermission: getAll(container),
    createPermission: create(container),
    updatePermission: update(container),
    removePermission: remove(container),
  }
}
