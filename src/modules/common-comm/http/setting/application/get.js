module.exports = ({
  common: { setting: { setRepository } }
}, {}) => {
  // code for getting all the items paginate
  const allSetting = ({ query }) => {
    return Promise
      .resolve()
      .then(() =>
        setRepository.getPaginate({
          attributes: query.attributes || 'id,key,value',
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