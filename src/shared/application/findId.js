module.exports = class {

    constructor (Repository) {
        this.repository = Repository
    }

    async execute (id) {
        return  this.repository.findByPk(id)
    }

}