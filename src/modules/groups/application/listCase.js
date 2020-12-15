module.exports = class {

    constructor (groupRepository) {
        this.groupRepository = groupRepository
    }

    async execute (query) {
        return  this.groupRepository.list(query)
    }

}