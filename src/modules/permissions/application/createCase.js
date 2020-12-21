const Entity = require('../domain/Entity')
module.exports = class {

    constructor (authPerRepository) {
        this.repository = authPerRepository
    }

    execute ({ name, description, action }) {
        const entity = new Entity({ name, description, action })
        return this.repository.create(entity)
    }

}