module.exports = class {

    constructor ({ id = null,  name, state }) {
        this.id = id
        this.state = state || true
        this.name = name
    }
}