module.exports = ({
  repository: {
    common: { city: { CitRepository: { destroy } } }
  }
}, {}) => {
  // code for change state the item
  const remove = ({ id }) => {
    return Promise
      .resolve()
      .then(() => destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    remove
  }
}
