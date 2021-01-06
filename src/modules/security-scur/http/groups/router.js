
const { Router } = require('express')
const instance = require('./infrastructure/controller')


module.exports = ({ application, response, logger}) => {
  const router = Router()
  const controller = instance({ application, response, logger})

  router.get('/', controller.getAllGps)
  router.post('/', controller.createGps)
  router.put('/:idGroup', controller.updateGps)
  router.delete('/:idGroup', controller.removeGps)

  return router
}


/*
module.exports = (router, logger, { Success, Fail }, auth, app) => {

  router.get('/', (req, res) => {
    res.status(Status.OK).json(Success('hola'))
  })
  return router

  /!*router.group('/groups', (router) => {
     /!* router.get('/',
          request.paginate,
          request.access(permissions.list),
          controller.listController.invoke
      )*!/
      router.post('/',
          request.create,
          request.access(permissions.create),
          controller.createController.invoke)
  }).middleware(request.auth)*!/

  /!*router.get('/groups',
      request.auth,
      (req, res, next) => request.check(permissions.list, req, res, next),
      request.paginate,
      controller.listController.invoke)

  router.post('/groups',
      request.auth,
      (req, res, next) => request.check(permissions.create, req, res, next),
      request.create,
      controller.createController.invoke)

  router.put('/groups/:idGroup',
      request.auth,
      (req, res, next) => request.check(permissions.update, req, res, next),
      request.update,
      controller.updateController.invoke)

  router.delete('/groups/:idGroup',
      request.auth,
      (req, res, next) => request.check(permissions.delete, req, res, next),
      request.pk,
      controller.deleteController.invoke)

  router.get('/groups/:idGroup/permissions',
      request.auth,
      (req, res, next) => request.check(permissions.permissions, req, res, next),
      request.pk,
      controller.assignPerListController.invoke)

  router.post('/groups/:idGroup/permissions',
      request.auth,
      (req, res, next) => request.check(permissions.assign, req, res, next),
      request.pk,
      controller.assignPerCrearController.invoke)*!/

}*/
