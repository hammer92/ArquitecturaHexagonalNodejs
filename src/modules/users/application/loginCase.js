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

    execute ({ userName, password }) {
        return  new Promise((resolve, reject) => {
            this.repository.findByUserName(userName).then((find)=>{
                if(find === null || !find.state) return reject(new notFound(userName))

                compare(password, find.password).then(valid =>{
                    if(!valid) return reject(new notAuthorized(userName))
                    const UUID = uuid.v4()
                    const token = jwt.sign(JSON.stringify({
                        UUID,
                        pkAuthGps: find.pkAuthGps,
                        id: find.id,
                        type: find.type,
                        base: find.base
                    }), process.env.JWT_SECRET)

                    global.User = find;

                    const entity = new TokenEntity({ id:UUID, pKAuthUsr: find.id ,origin:"General", token })
                    this.repositoryToken.create(entity).then( user => resolve(user)).catch(reject)

                }).catch(reject)
            }).catch(reject)
        })
    }

}