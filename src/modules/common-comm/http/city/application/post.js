const { City } = require('../domain')
module.exports = ({
  repository: {
    common: {  city: { CitRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const city = City(body)
        return CitRepository.create(city)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}