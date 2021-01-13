module.exports = ({
  repository: {
    security: { permission: { PerRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const allPaginate = ({ query }) => {
    return Promise
      .resolve()
      .then(() =>
        PerRepository.getPaginate({
          attributes: query.attributes || 'id,name,description,action',
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    allPaginate
  }
}