module.exports = ({
  repository: {
    common: { setting: { setRepository } }
  }
}, {}) => {
  // code for change state the item
  const removeSetting = ({ id }) => {
    return Promise
      .resolve()
      .then(() => setRepository.destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    removeSetting
  }
}
