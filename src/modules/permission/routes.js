const request = require('./infrastructure/request')
const controller = require('./infrastructure')
module.exports = (router) => {
    router.get('/permissions', request.paginate,
        controller.listController.invoke)

    router.post('/permissions', request.create,
        controller.createController.invoke)

    router.put('/permissions/:idPermission', request.update,
        controller.updateController.invoke)

    router.delete('/permissions/:idPermission', request.pk,
        controller.deleteController.invoke)

}
