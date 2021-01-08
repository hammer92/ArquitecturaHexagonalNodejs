const { Module } = require('../domain')
module.exports = ({ common: { modules: { modRepository } } } , {}) => {
  // code for create new item
  const createModule = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const module = Module(body)
        return modRepository.create(module)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    createModule
  }
}