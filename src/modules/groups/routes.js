const request = require('./infrastructure/request')
const controller = require('./infrastructure')
const permissions = require("./permissions")
module.exports = (router) => {
    router.get('/groups',
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
        controller.assignPerCrearController.invoke)

}
