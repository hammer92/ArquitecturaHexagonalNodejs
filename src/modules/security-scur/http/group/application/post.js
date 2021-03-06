const { Group }  = require('../domain')
module.exports = ({
  repository: {
    security: { group: { GpsRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const group = Group(body)
        return GpsRepository.create(group)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}