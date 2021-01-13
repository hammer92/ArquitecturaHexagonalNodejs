const { Permission } = require('../domain/index')

module.exports = ({
  repository: {
    security: {  permission: { PerRepository } }
  }
}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const group = Permission(body)
        return PerRepository.update(group, {
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
