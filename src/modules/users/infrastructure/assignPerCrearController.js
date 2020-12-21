const { assignPerActCase } = require('../application')
const {authPerActRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new assignPerActCase(authPerActRepository)
        handler.execute({
            pKAuthPer: req.body.PKAuthPer,
            type: 'AuthUsr',
            base: req.params.idUser
        }).then(data => {
            return response.valid({status: 201, data}, res)
        }).catch(e => error.jsonError(e, res))
    }
}