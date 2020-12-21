const {getHash} = require("../../../shared/utils/hash");
module.exports = class {

    constructor({id = null, userName, password, pkAuthGps, type, base}) {
        this.id = id
        this.userName = userName
        if(password) this.password = getHash(password)
        this.pkAuthGps = pkAuthGps
        this.type = type || "General"
        this.base = base
    }
}