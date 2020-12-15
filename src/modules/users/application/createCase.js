const Entity = require('../domain/Entity')
module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute ({ UserName, Password, PkAuthGps }) {
        const entity = new Entity({ UserName, Password, PkAuthGps })
        return this.repository.create(entity)
    }

}