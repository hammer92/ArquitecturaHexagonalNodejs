const { deleteCase } = require('../application')
const { authPerRepository } = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke (req, res) {
        const handler = new deleteCase(authPerRepository)
        handler.execute(req.params.idPermission)
            .then(data => response.valid({status:201, data}, res))
            .catch(e => error.jsonError(e, res))
    }
}
