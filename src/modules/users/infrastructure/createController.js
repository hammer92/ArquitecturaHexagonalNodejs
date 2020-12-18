const {createCase } = require('../application')
const {authUsrRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new createCase(authUsrRepository)
        handler.execute(req.body)
            .then(data => response.valid({status: 201, data}, res))
            .catch(e => error.jsonError(e, res))


    }
}
