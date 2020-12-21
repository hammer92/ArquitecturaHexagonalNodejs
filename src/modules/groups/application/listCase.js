module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    async execute (query) {
        return this.repository.list(query)
    }

}