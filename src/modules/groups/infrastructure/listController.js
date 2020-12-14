const { listGroupCase } = require('../application')
const { groupRepository } = require('./repositories')
const {error, response} = require('./serializer')
module.exports =  {
    async invoke (req, res) {

        const handler = new listGroupCase(groupRepository)
        handler.execute(req.body).then(listed => {
            return response.valid({
                status: 201,
                data: listed
            }, res)
        }).catch(e => error.jsonError(e, res))
    }
}
