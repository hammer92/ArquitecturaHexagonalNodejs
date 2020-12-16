const ActionEntity = require('../domain/ActionEntity')
module.exports = class {

    constructor (authPerActRepository) {
        this.repository = authPerActRepository
    }

    execute ({ PKAuthPer, State, Type, Base }) {
        const entity = new ActionEntity({ PKAuthPer, State, Type, Base })
        return this.repository.create(entity)
    }

}