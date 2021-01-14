const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = (container) => {
  const router = Router()
  const controller = instance(container)

  router.get('/', controller.getCity)
  router.post('/', controller.createCity)
  router.put('/:idCity', controller.updateCity)
  router.delete('/:idCity', controller.deleteCity)
  return router
}