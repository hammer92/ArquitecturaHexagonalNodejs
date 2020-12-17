module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Usuario no permitido'
        this.status = 401
    }
}