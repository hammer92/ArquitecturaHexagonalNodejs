module.exports = ({
  repository: {
    security: { group: { GpsRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const allPaginate = ({ query }) => {
    return Promise
      .resolve()
      .then(() =>
        GpsRepository.getPaginate({
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