const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = (container) => {
  const router = Router()
  const controller = instance(container)

  router.get('/', controller.getArea)
  router.post('/', controller.createArea)
  router.put('/:idArea', controller.updateArea)
  router.delete('/:idArea', controller.deleteArea)
  return router
}