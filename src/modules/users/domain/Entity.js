const {utils} = require("../../../shared");
module.exports = class {

    constructor({id = null, userName, password, pkAuthGps, type, base}) {
        this.id = id
        this.userName = userName
        if(password) this.password = utils.getHash(password)
        this.pkAuthGps = pkAuthGps
        this.type = type || 'AuthUsr'
        this.base = base
    }
}