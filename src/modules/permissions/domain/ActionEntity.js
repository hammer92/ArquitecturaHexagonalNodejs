module.exports = class {

    constructor ({ Id = null,  PKAuthPer, State = true, Type = 'General', Base }) {
        this.Id = Id
        this.PKAuthPer = PKAuthPer
        this.State = State
        this.Type = Type
        this.Base = Base
    }
}