module.exports = class {

    constructor (authPerActRepository) {
        this.Repository = authPerActRepository
    }

    async execute ({ Base, Type, query }) {
        return this.Repository.paginate(Base, Type, query)
    }

}