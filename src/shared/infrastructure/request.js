const jwt = require('jsonwebtoken')
const UserModule  = require('../../modules/users')
const checkPerActCase = require('../../modules/permissions/application/checkPerActCase')
const { authPerActRepository } = require('../../modules/permissions/infrastructure/repositories')
const { ResponseError } = require('./serializer')
module.exports = {
    check(pKAuthPer, req, res, next) {
        if(!req.User) return ResponseError.jsonError(new UserModule.exceptions.notAuthorized(""), res)
        const permission = new checkPerActCase(authPerActRepository)
        permission.execute({pKAuthPer, idUser: req.User.id})
            .then(()=>next()).catch(e => ResponseError.jsonError(e, res))
    },
    auth(req, res, next) {
        const token = req.get('Authorization')
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return ResponseError.jsonError(new UserModule.exceptions.notAuthorized(""), res)
            const permission = new UserModule.application.checkAuthUsrTokCase(UserModule.repositories.authUsrTokRepository)
            permission.execute(decoded).then((data)=> {
                    req.User = decoded;
                    next()
                }).catch(e => ResponseError.jsonError(e, res))
        })
    }
}
