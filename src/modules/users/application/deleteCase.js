const notFound = require('../domain/exceptions/notFound')
module.exports = class {
    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute (idUser) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idUser).then((find)=>{
                if(find === null) return reject(new notFound(idUser))
                this.repository.delete(idUser).then( destroy => resolve(destroy)).catch(reject)
            }).catch(reject)

        })

    }
}