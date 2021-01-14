const getDepartment = require('./get')
const createDepartment = require('./create')
const updateDepartment = require('./update')
const deleteDepartment = require('./delete')

module.exports = (container) => {
  return {
    getDepartment: getDepartment(container),
    createDepartment: createDepartment(container),
    updateDepartment: updateDepartment(container),
    deleteDepartment: deleteDepartment(container),
  }
}
