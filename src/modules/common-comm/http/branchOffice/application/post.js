const { BranchOffice } = require('../domain')
module.exports = ({
  repository: {
    common: {  branchOffice: { BofRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const branchOffice = BranchOffice(body)
        return BofRepository.create(branchOffice)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}