module.exports = ({
  repository: {
    common: { area: { AreRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        AreRepository.all({
          attributes: ['id', 'name'],
          where: { pkCommAre: null },
          include: {
            association: 'subarea',
            attributes: ['id', 'name']
          }
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all
  }
}