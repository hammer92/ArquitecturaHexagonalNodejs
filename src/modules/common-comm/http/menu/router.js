const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = (container) => {
  const router = Router()
  const controller = instance(container)

  router.get('/', controller.getModule)
  router.post('/', controller.createModule)
  router.put('/:idModule', controller.updateModule)
  router.delete('/:idModule', controller.deleteModule)
  return router
}