module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Usuario not found.'
        this.status = 404
    }
}