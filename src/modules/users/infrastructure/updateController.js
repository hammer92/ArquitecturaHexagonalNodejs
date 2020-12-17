const { updateCase } = require('../application')
const {authUsrRepository} = require('./repositories')
const {error, response} = require('./serializer')
module.exports = {
    invoke(req, res) {
        const handler = new updateCase(authUsrRepository)
        handler.execute({
            idUser: req.params.idUser,
            updateForm: {
                UserName: req.body.UserName,
                PkAuthGps: req.body.PkAuthGps
            }
        }).then(user => response.valid({status:201, data:user}, res))
            .catch(e => error.jsonError(e, res))
    }
}
