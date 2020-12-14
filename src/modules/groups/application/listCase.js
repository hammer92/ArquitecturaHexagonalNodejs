module.exports = class {

    constructor (groupRepository) {
        this.groupRepository = groupRepository
    }

    async execute () {
        return  this.groupRepository.list()
    }

}