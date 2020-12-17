const notFound = require('../domain/exceptions/groupNotFound')

module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute (idGroup) {

        return  new Promise((resolve, reject) => {
            this.repository.findById(idGroup).then((find)=>{
                if(find === null) return reject(new notFound(idGroup))
                this.repository.delete(idGroup).then( destroy => resolve(destroy)).catch(reject)
            }).catch(reject)

        })
    }
}