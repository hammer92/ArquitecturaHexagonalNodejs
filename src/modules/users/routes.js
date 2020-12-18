const request = require('./infrastructure/request')
const controller = require('./infrastructure')
const permissions = require("./permissions")
module.exports = (router) => {
    router.get('/login',
        controller.loginController.invoke)

    router.post('/logout',
        request.auth,
        controller.logoutController.invoke)

    router.get('/users',
        request.auth,
        (req, res, next) => request.check(permissions.list, req, res, next),
        request.paginate,
        controller.listController.invoke)

    router.post('/users',
        request.auth,
        (req, res, next) => request.check(permissions.create, req, res, next),
        request.create,
        controller.createController.invoke)

    router.put('/users/:idUser',
        request.auth,
        (req, res, next) => request.check(permissions.update, req, res, next),
        request.pk, request.update,
        controller.updateController.invoke)

    router.delete('/users/:idUser',
        request.auth,
        (req, res, next) => request.check(permissions.delete, req, res, next),
        request.pk,
        controller.deleteController.invoke)

    router.get('/users/:idUser/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.permissions, req, res, next),
        request.pk,
        controller.assignPerListController.invoke)

    router.post('/users/:idUser/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.assign, req, res, next),
        request.pk,
        controller.assignPerCrearController.invoke)

}
