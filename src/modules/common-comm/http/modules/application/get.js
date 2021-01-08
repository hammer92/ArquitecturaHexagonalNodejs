module.exports = ({ common: { modules: { modRepository } } } , {}) => {
  // code for getting all the items paginate
  const allSetting = ({ query }) => {
    return Promise
      .resolve()
      .then(() =>
        modRepository.getPaginate({
          attributes: query.attributes || 'id,name,icon,',
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    allSetting
  }
}