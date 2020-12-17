const notPermission = require('../domain/exceptions/notPermission')
module.exports = class {

    constructor (authPerActRepository) {
        this.repository = authPerActRepository
    }

    execute ({ PKAuthPer, idUser }) {
        return  new Promise((resolve, reject) => {
            this.repository.check({PKAuthPer, idUser}).then((check)=> {
                if (check === null || !check.State) return reject(new notPermission(''))
                return resolve(true)
            }).catch(reject)
        });
    }

}