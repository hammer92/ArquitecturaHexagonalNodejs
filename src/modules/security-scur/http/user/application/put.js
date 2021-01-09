const { User } = require('../domain/index')

module.exports = ({
  repository: {
    security: { user: { UsrRepository } }
  }
}, {}) => {  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const user = User(body)
        return UsrRepository.update(user, {
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
