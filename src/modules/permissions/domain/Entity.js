module.exports = class {

    constructor ({ id = null,  name, description, action }) {
        this.id = id
        this.name = name
        this.description = description
        this.action = action
    }
}