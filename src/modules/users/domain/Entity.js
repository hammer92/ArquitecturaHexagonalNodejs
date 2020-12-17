const {getHash} = require("../../../shared/utils/hash");
module.exports = class {

    constructor({Id = null, UserName, Password, PkAuthGps, Type, Base}) {
        this.Id = Id
        this.UserName = UserName
        if(Password) this.Password = getHash(Password)
        this.PkAuthGps = PkAuthGps
        this.Type = Type || "General"
        this.Base = Base
    }
}