module.exports = ({
  repository: {
    security: { user: { UsrRepository } }
  }
}, {}) => {  // code for getting all the items paginate
  const allPaginate = ({ query }) => {
    return Promise
      .resolve()
      .then(() =>
        UsrRepository.getPaginate({
          attributes: query.attributes || 'id,name',
          where: { state: true }
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