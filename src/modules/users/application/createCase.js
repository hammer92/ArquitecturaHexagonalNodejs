const Entity = require('../domain/Entity')
const userNameExist = require('../domain/exceptions/userNameExist.js')
module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute ({ UserName, Password, PkAuthGps }) {
        return  new Promise((resolve, reject) => {
            this.repository.findByUserName(UserName).then((find)=>{
                if(find !== null) return reject(new userNameExist(UserName))
                const entity = new Entity({ UserName, Password, PkAuthGps })
                this.repository.create(entity).then( user => resolve(user)).catch(reject)
            }).catch(reject)
        })
    }

}