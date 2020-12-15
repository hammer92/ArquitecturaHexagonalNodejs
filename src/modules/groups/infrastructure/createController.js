const {createGroupCase} = require('../application')
const {authGpsRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new createGroupCase(authGpsRepository)
        handler.execute(req.body).then(group => {
            return response.valid({
                status: 201,
                data: group
            }, res)
        }).catch(e => error.jsonError(e, res))
    }
}
