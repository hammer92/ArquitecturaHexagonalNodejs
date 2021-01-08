module.exports = ({ common: { menu: { menRepository } } } , {}) => {
  // code for change state the item
  const removeSetting = ({ id }) => {
    return Promise
      .resolve()
      .then(() => menRepository.destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    removeSetting
  }
}
