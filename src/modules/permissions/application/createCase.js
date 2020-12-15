const Entity = require('../domain/Entity')
module.exports = class {

    constructor (authPerRepository) {
        this.repository = authPerRepository
    }

    execute ({ Name, Description, Action }) {
        const entity = new Entity({ Name, Description, Action })
        return this.repository.create(entity)
    }

}