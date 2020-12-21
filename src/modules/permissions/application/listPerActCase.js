module.exports = class {

    constructor (authPerActRepository) {
        this.Repository = authPerActRepository
    }

    async execute ({ base, type, query }) {
        return this.Repository.paginate(base, type, query)
    }

}