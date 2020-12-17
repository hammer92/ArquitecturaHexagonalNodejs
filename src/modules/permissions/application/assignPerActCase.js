const ActionEntity = require('../domain/ActionEntity')
module.exports = class {

    constructor (authPerActRepository) {
        this.repository = authPerActRepository
    }

    execute ({ PKAuthPer, Type, Base }) {
        const entity = new ActionEntity({ PKAuthPer, Type, Base })
        return this.repository.updateOrCreate(entity, {PKAuthPer, Type, Base})
    }

}