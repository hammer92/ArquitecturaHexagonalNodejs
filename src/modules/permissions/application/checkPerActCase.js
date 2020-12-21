const notPermission = require('../domain/exceptions/notPermission')
module.exports = class {

    constructor (authPerActRepository) {
        this.repository = authPerActRepository
    }

    execute ({ pKAuthPer, idUser }) {
        return  new Promise((resolve, reject) => {
            this.repository.check({pKAuthPer, idUser}).then((check)=> {
                if (check === null || !check.state) return reject(new notPermission(''))
                return resolve(true)
            }).catch(reject)
        });
    }

}