const ActionEntity = require('../domain/ActionEntity')
const notFound = require('../domain/exceptions/notFound')
module.exports = class {

    constructor (authPerActRepository) {
        this.repository = authPerActRepository
    }

    execute ({ pKAuthPer, type, base }) {
        return  new Promise((resolve, reject) => {
            this.repository.existType(type, base).then((find)=>{

                if(find === null) return reject(new notFound())

                const entity = new ActionEntity({ pKAuthPer, type, base })
                this.repository.updateOrCreate(entity, { pKAuthPer, type, base })
                    .then(resolve).catch(reject)
            }).catch(reject)

        });


    }

}