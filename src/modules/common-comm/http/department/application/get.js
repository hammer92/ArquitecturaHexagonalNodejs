module.exports = ({
  repository: {
    common: { department: { DepRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        DepRepository.all({
          attributes: ['id', 'name']
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