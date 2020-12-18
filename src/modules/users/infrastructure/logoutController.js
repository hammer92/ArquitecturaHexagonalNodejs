const { deleteAuthUsrTokCase } = require('../application')
const { authUsrRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new deleteAuthUsrTokCase(authUsrRepository)
        handler.execute(req.User)
            .then(() => response.valid({status: 201, data: "ok"}, res))
            .catch(e => error.jsonError(e, res))


    }
}
