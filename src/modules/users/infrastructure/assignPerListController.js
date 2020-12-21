const {listPerActCase} = require('../application')
const {authPerActRepository} = require('./repositories')
const {error, response} = require('./serializer')
module.exports = {
    async invoke(req, res) {
        const handler = new listPerActCase(authPerActRepository)
        handler.execute({
            type: 'AuthUsr',
            base: req.params.idUser,
            query: req.query
        }).then(data => {
            return response.valid({status: 201, data}, res)
        }).catch(e => error.jsonError(e, res))
    }
}
