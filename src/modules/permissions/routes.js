const request = require('./infrastructure/request')
const controller = require('./infrastructure')
const permissions = require("./permissions")

module.exports = (router) => {
    router.get('/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.list, req, res, next),
        request.paginate,
        controller.listController.invoke)

    router.post('/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.create, req, res, next),
        request.create,
        controller.createController.invoke)

    router.put('/permissions/:idPermission',
        request.auth,
        (req, res, next) => request.check(permissions.update, req, res, next),
        request.pk,
        request.update,
        controller.updateController.invoke)

    router.delete('/permissions/:idPermission',
        request.auth,
        (req, res, next) => request.check(permissions.delete, req, res, next),
        request.pk,
        controller.deleteController.invoke)

}
