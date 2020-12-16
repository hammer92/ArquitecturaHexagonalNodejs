const {assignPerActCase} = require('../application')
const {authPerActRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new assignPerActCase(authPerActRepository)
        handler.execute({
            PKAuthPer: req.body.PKAuthPer,
            Type: 'Grupo',
            Base: req.params.idGroup
        }).then(group => {
            return response.valid({
                status: 201,
                data: group
            }, res)
        }).catch(e => error.jsonError(e, res))
    }
}