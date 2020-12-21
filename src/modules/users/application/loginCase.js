const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const  TokenEntity = require('../domain/TokenEntity')
const notAuthorized = require('../domain/exceptions/notAuthorized.js')
const notFound = require('../domain/exceptions/notFound.js')
const { compare } = require('../../../shared/utils/hash')
module.exports = class {

    constructor (authUsrRepository, authUsrTokRepository) {
        this.repository = authUsrRepository
        this.repositoryToken = authUsrTokRepository
    }

    execute ({ UserName, Password }) {
        return  new Promise((resolve, reject) => {
            this.repository.findByUserName(UserName).then((find)=>{
                if(find === null || !find.State) return reject(new notFound(UserName))

                compare(Password, find.Password).then(valid =>{
                    if(!valid) return reject(new notAuthorized(UserName))
                    const UUID = uuid.v4()
                    const Token = jwt.sign(JSON.stringify({
                        UUID,
                        PkAuthGps: find.PkAuthGps,
                        id: find.id
                    }), process.env.JWT_SECRET)

                    const entity = new TokenEntity({ id:UUID, PKAuthUsr: find.id ,Origin:"General", Token })
                    this.repositoryToken.create(entity).then( user => resolve(user)).catch(reject)

                }).catch(reject)
            }).catch(reject)
        })
    }

}