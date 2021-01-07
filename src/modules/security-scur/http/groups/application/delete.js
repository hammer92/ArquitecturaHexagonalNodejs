module.exports = ({ repository: { security: { GpsRepository } } }, {}) => {
  // code for change state the item
  const remove = ({ id }) => {
    return Promise
      .resolve()
      .then(() => GpsRepository.destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    remove
  }
}
