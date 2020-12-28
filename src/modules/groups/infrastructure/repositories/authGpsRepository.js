const { infrastructure } = require("../../../../shared")

module.exports = class authGpsRepository extends infrastructure.repositories{

    constructor({AuthGps}) {
        super();
        this.model = AuthGps
    }
}