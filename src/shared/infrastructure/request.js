const jwt = require('jsonwebtoken')
const notAuthorized  = require('../../modules/users/domain/exceptions/notAuthorized')
const { checkAuthUsrTokCase }  = require('../../modules/users/application')
const { authUsrTokRepository }  = require('../../modules/users/infrastructure/repositories')
const checkPerActCase = require('../../modules/permissions/application/checkPerActCase')
const { authPerActRepository } = require('../../modules/permissions/infrastructure/repositories')
const { ResponseError } = require('./serializer')
module.exports = {
    check(PKAuthPer, req, res, next) {
        if(!req.User) return ResponseError.jsonError(new notAuthorized(""), res)
        const permission = new checkPerActCase(authPerActRepository)
        permission.execute({PKAuthPer, idUser: req.User.id})
            .then(()=>next()).catch(e => ResponseError.jsonError(e, res))
    },
    auth(req, res, next) {
        const token = req.get('Authorization')
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return ResponseError.jsonError(new notAuthorized(""), res)
            const permission = new checkAuthUsrTokCase(authUsrTokRepository)
            permission.execute(decoded).then(()=> {
                    req.User = decoded;
                    next()
                }).catch(e => ResponseError.jsonError(e, res))
        })
    }
}
