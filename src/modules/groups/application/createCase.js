const GroupEntity = require('../domain/Entity')
module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute ({ body, User }) {
        const groupEntity = new GroupEntity({name: body.name,})
        groupEntity.setCreatedBy(User)
        return this.repository.create(groupEntity)
    }

}