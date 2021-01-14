const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = (container) => {
  const router = Router()
  const controller = instance(container)

  router.get('/', controller.getBranchOffice)
  router.post('/', controller.createBranchOffice)
  router.put('/:idBranchOffice', controller.updateBranchOffice)
  router.delete('/:idBranchOffice', controller.deleteBranchOffice)
  return router
}