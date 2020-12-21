const Entity = require('../domain/Entity')
const userNameExist = require('../domain/exceptions/userNameExist.js')
module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute ({ userName, password, pkAuthGps }) {
        return  new Promise((resolve, reject) => {
            this.repository.findByUserName(userName).then((find)=>{
                if(find !== null) return reject(new userNameExist(userName))
                const entity = new Entity({ userName, password, pkAuthGps })
                this.repository.create(entity).then( user => resolve(user)).catch(reject)
            }).catch(reject)
        })
    }

}