const { listCase } = require('../application')
const { authUsrRepository } = require('./repositories')
const {error, response} = require('./serializer')
module.exports =  {
    async invoke (req, res) {
        const handler = new listCase(authUsrRepository)
        handler.execute(req.query).then(listed => {
            return response.valid({
                status: 201,
                data: listed
            }, res)
        }).catch(e => error.jsonError(e, res))
    }
}
