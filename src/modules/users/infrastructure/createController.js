const { createCase } = require('../application')
const {authUsrRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new createCase(authUsrRepository)
        handler.execute(req.body).then(group => response.valid({status: 201, data: group}, res))
            .catch(e => error.jsonError(e, res))
    }
}
