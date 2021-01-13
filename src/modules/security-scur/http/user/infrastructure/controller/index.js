const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')
const remove = require('./delete')
module.exports = (container) => {
  return {
    getAllUser: getAll(container),
    createUser: create(container),
    updateUser: update(container),
    removeUser: remove(container),
  }
}
