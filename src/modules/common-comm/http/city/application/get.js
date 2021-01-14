module.exports = ({
  repository: {
    common: {  city: { CitRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        CitRepository.all({
          attributes: ['id', 'name', 'pkCommDep'],
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