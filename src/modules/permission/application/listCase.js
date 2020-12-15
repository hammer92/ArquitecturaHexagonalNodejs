module.exports = class {

    constructor (Repository) {
        this.Repository = Repository
    }

    async execute (query) {
        return  this.Repository.list(query)
    }

}