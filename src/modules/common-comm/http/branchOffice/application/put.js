const { BranchOffice }  = require('../domain')
module.exports = ({
  repository: {
    common: {  branchOffice: { BofRepository } }
  }
}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const branchOffice = BranchOffice(body)
        return BofRepository.update(branchOffice, {
          where: { id },
        }).then(([status, result])=> result)
      })
      .catch(error => {
        throw new Error(error)
      })
  }


  return {
    update
  }
}
