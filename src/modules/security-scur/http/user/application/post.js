const { User }  = require('../domain')
module.exports = ({
  repository: {
    security: { user: { UsrRepository } }
  }
}, {}) => {  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const user = User(body)
        return UsrRepository.create(user)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}