const GroupEntity = require('../domain/Entity')
module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute ({ name }) {
        const groupEntity = new GroupEntity({ name })
        return this.repository.create(groupEntity)
    }

}