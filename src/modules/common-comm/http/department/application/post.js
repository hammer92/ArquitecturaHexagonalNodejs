const { Department } = require('../domain')
module.exports = ({
  repository: {
    common: { department: { DepRepository } }
  }
}, {}) => {
  // code for create new item
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const department = Department(body)
        return DepRepository.create(department)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}