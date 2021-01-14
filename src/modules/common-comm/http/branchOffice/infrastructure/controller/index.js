const getBranchOffice = require('./get')
const createBranchOffice = require('./create')
const updateBranchOffice = require('./update')
const deleteBranchOffice = require('./delete')

module.exports = (container) => {
  return {
    getBranchOffice: getBranchOffice(container),
    createBranchOffice: createBranchOffice(container),
    updateBranchOffice: updateBranchOffice(container),
    deleteBranchOffice: deleteBranchOffice(container),
  }
}
