const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const  TokenEntity = require('../domain/TokenEntity')
const {notAuthorizedUser, notFoundUser} = require('../domain/exceptions')
const { utils } = require('../../../shared')
module.exports = class {

    constructor (authUsrRepository, authUsrTokRepository) {
        this.repository = authUsrRepository
        this.repositoryToken = authUsrTokRepository
    }

    execute ({ userName, password }) {
        return  new Promise((resolve, reject) => {
            this.repository.findByUserName(userName).then((find)=>{
                if(find === null || !find.state) return reject(new notFoundUser(userName))

                utils.compare(password, find.password).then(valid =>{
                    if(!valid) return reject(new notAuthorizedUser(userName))
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