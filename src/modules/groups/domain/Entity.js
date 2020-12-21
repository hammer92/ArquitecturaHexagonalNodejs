module.exports = class {

    constructor ({ Id = null,  Name, State }) {
        this.Id = Id
        this.State = State || true
        this.Name = Name
    }
}