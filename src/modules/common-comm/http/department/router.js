const { Router } = require('express')
const instance = require('./infrastructure/controller')

module.exports = (container) => {
  const router = Router()
  const controller = instance(container)

  router.get('/', controller.getDepartment)
  router.post('/', controller.createDepartment)
  router.put('/:idDepartment', controller.updateDepartment)
  router.delete('/:idDepartment', controller.deleteDepartment)
  return router
}