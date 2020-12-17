const { deleteCase } = require('../application')
const { authGpsRepository } = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke (req, res) {
        const handler = new deleteCase(authGpsRepository)
        handler.execute(req.params.idGroup)
            .then(data => response.valid({status:201, data}, res))
            .catch(e => error.jsonError(e, res))
    }
}