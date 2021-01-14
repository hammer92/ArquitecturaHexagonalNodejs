const { Area } = require('../domain')
module.exports = ({
  repository: {
    common: { area: { AreRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const area = Area(body)
        return AreRepository.create(area)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}