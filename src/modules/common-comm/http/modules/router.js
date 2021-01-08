const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = ({ application, response, logger }) => {
  const router = Router()
  const controller = instance({ application, response, logger })

  router.get('/', controller.getModule)
  router.post('/', controller.createModule)
  router.put('/:idModule', controller.updateModule)
  router.delete('/:idModule', controller.deleteModule)
  return router
}