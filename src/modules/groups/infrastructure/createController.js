const {createGroupCase} = require('../application')
const {groupRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new createGroupCase(groupRepository)
        handler.execute(req.body).then(group => {
            return response.valid({
                status: 201,
                data: group
            }, res)
        }).catch(e => error.internal(e, res))
    }
}
