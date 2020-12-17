const {listPerActCase} = require('../application')
const {authPerActRepository} = require('./repositories')
const {error, response} = require('./serializer')
module.exports = {
    async invoke(req, res) {
        const handler = new listPerActCase(authPerActRepository)
        handler.execute({
            Type: 'AuthUsr',
            Base: req.params.idUser,
            query: req.query
        }).then(listed => {
            return response.valid({
                status: 201,
                data: listed
            }, res)
        }).catch(e => error.jsonError(e, res))
    }
}
