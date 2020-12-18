const notAuthorized = require('../domain/exceptions/notAuthorized.js')
module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute ({ UUID , id }) {
        return  new Promise((resolve, reject) => {
            this.repository.checkAuthUsrTok(UUID , id).then((find)=>{
                if(find === null) return reject(new notAuthorized(""))
                this.repository.updateLastUsedAtAuthUsrTok(UUID , id).then( () => resolve(find.reload()))
                    .catch(reject)
            }).catch(reject)
        })
    }

}