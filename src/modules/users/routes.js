const request = require('./infrastructure/request')
const controller = require('./infrastructure')
module.exports = (router) => {
    router.get('/users', request.paginate,
        controller.listController.invoke)

    router.post('/users',
        (req, res, next) =>
            request.check("create_user", req, res, next),
        request.create,
        controller.createController.invoke)

    router.put('/users/:idUser',
        (req, res, next) =>
            request.check("update_user", req, res, next),
        request.pk, request.update,
        controller.updateController.invoke)

    router.delete('/users/:idUser', request.pk,
        controller.deleteController.invoke)

    router.get('/users/:idUser/permissions', request.pk,
        controller.assignPerListController.invoke)

    router.post('/users/:idUser/permissions', request.pk,
        controller.assignPerCrearController.invoke)

}
