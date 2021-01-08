const { Group } = require('../domain/index')

module.exports = ({ security: { group: { GpsRepository } } }, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const group = Group(body)
        return GpsRepository.update(group, {
          where: { id },
        }).then(([status, result])=> result)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    update
  }
}
