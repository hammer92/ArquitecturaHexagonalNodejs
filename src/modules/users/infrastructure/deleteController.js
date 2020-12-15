const { deleteCase } = require('../application')
const { authUsrRepository } = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke (req, res) {
        const handler = new deleteCase(authUsrRepository)
        handler.execute(req.params.idUser)
            .then(data => response.valid({status:201, data}, res))
            .catch(e => error.jsonError(e, res))
    }
}
