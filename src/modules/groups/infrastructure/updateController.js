const {updateGroupCase} = require('../application')
const {authGpsRepository} = require('./repositories')
const {error, response} = require('./serializer')
module.exports = {
    invoke(req, res) {

        const handler = new updateGroupCase(authGpsRepository)
        handler.execute({
            idGroup: req.params.idGroup,
            updateForm: req.body
        }).then((group) => response.valid({status:201, data:group}, res))
            .catch((e) => error.jsonError(e, res))
    }
}
