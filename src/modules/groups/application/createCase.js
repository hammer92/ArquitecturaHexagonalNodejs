const GroupEntity = require('../domain/Entity')
module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute ({ Name }) {
        const groupEntity = new GroupEntity({ Name })
        return this.repository.create(groupEntity)
    }

}