module.exports = class {

    constructor (authPerRepository) {
        this.Repository = authPerRepository
    }

    async execute (query) {
        return  this.Repository.list(query)
    }

}