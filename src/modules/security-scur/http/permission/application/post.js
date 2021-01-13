const { Permission }  = require('../domain')
module.exports = ({
  repository: {
    security: {  permission: { PerRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const group = Permission(body)
        return PerRepository.create(group)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}