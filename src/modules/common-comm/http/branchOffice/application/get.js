module.exports = ({
  repository: {
    common: {  branchOffice: { BofRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        BofRepository.all({
          attributes: ['id', 'name', 'pkCommCit'],
          // include:{ association: 'permiso', attributes: ['state']}
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all
  }
}