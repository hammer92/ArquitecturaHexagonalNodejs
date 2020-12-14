const GroupEntity = require('../domain/Entity')
module.exports = class {

    constructor (groupRepository) {
        this.groupRepository = groupRepository
    }

    execute ({ Name }) {
        const groupEntity = new GroupEntity({ Name })
        return this.groupRepository.create(groupEntity)
    }

}