const notAuthorized = require('../domain/exceptions/notAuthorized.js')
module.exports = class {

    constructor (authUsrTokRepository) {
        this.repository = authUsrTokRepository
    }

    execute ({ UUID , id }) {
        return  new Promise((resolve, reject) => {
            this.repository.check(UUID , id).then((find)=>{
                if(find === null) return reject(new notAuthorized(""))
                this.repository.delete(UUID , id).then(resolve).catch(reject)
            }).catch(reject)
        })
    }

}