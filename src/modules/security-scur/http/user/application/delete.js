module.exports = ({
  repository: {
    security: { user: { UsrRepository } }
  }
}, {}) => {
  // code for change state the item
  const remove = ({ id }) => {
    return Promise
      .resolve()
      .then(() => UsrRepository.destroy({ where: { id } }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    remove
  }
}
