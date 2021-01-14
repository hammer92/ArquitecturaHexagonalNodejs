const getArea = require('./get')
const createArea = require('./create')
const updateArea = require('./update')
const deleteArea = require('./delete')

module.exports = (container) => {
  return {
    getArea: getArea(container),
    createArea: createArea(container),
    updateArea: updateArea(container),
    deleteArea: deleteArea(container),
  }
}
