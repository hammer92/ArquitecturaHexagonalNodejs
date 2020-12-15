const request = require('./infrastructure/request')
const controller = require('./infrastructure')
module.exports = (router) => {
    router.get('/users', request.paginate,
        controller.listController.invoke)

    router.post('/users', request.create,
        controller.createController.invoke)

    router.put('/users/:idUser', request.update,
        controller.updateController.invoke)

    router.delete('/users/:idUser', request.pk,
        controller.deleteController.invoke)

}
