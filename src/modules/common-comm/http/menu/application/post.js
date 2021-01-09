const { Module } = require('../domain')
module.exports = ({
  repository: {
    common: { menu: { menRepository } }
  }
}, {}) => {
  // code for create new item
  const createModule = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const module = Module(body)
        return menRepository.create(module)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    createModule
  }
}