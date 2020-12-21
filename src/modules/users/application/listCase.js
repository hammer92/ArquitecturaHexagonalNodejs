module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    async execute (query) {
        return this.repository.list(query)
    }

}