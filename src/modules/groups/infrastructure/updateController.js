const {updateCase} = require('../application')
const {authGpsRepository} = require('./repositories')
const {error, response} = require('./serializer')
module.exports = {
    invoke(req, res) {

        const handler = new updateCase(authGpsRepository)
        handler.execute(req).then((group) => response.valid({status:201, data:group}, res))
            .catch((e) => error.jsonError(e, res))
    }
}
