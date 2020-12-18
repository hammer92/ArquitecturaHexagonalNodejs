const { loginCase } = require('../application')
const {authUsrRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new loginCase(authUsrRepository)
        handler.execute(req.body)
            .then(user => response.valid({status: 201, data: user}, res))
            .catch(e => error.jsonError(e, res))


    }
}
