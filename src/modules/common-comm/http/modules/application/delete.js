module.exports = ({ common: { modules: { modRepository } } } , {}) => {
  // code for change state the item
  const removeSetting = ({ id }) => {
    return Promise
      .resolve()
      .then(() => modRepository.destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    removeSetting
  }
}
