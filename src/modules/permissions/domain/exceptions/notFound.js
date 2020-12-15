module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Permiso not found.'
        this.status = 404
    }
}