module.exports = class {

    constructor({Id = null, UserName, Password, PkAuthGps, Type, Base}) {
        this.Id = Id
        this.UserName = UserName
        this.Password = Password
        this.PkAuthGps = PkAuthGps
        this.Type = Type
        this.Base = Base
    }
}