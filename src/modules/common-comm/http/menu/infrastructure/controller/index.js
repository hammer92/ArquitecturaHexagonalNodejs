const getModule = require('./get')
const createModule = require('./create')
const updateModule = require('./update')
const deleteModule = require('./delete')

module.exports = (container) => {
  return {
    getModule: getModule(container),
    createModule: createModule(container),
    updateModule: updateModule(container),
    deleteModule: deleteModule(container),
  }
}
