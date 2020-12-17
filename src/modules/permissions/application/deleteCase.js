const notFound = require('../domain/exceptions/notFound')

module.exports = class {

    constructor (authPerRepository) {
        this.repository = authPerRepository
    }

    execute (idPermission) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idPermission).then((find)=> {
                if (find === null) return reject(new notFound(idPermission))
                this.repository.delete(idPermission).then(resolve).catch(reject)
            }).catch(reject)
        });
    }
}