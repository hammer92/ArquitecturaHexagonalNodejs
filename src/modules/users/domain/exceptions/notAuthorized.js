module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Usuario no Autorizado'
        this.status = 401
    }
}