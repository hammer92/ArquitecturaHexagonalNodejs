const checkPerActCase = require('../../modules/permissions/application/checkPerActCase')
const { authPerActRepository } = require('../../modules/permissions/infrastructure/repositories')
const { ResponseError } = require('./serializer')
module.exports = {
    check(PKAuthPer, req, res, next) {
        const permission = new checkPerActCase(authPerActRepository)
        permission.execute({PKAuthPer, idUser: 1})
            .then(()=>next()).catch(e => ResponseError.jsonError(e, res))
    },
    auth(req, res, next) {}
}
