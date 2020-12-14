module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.status = 404
        this.title = 'Not Found.'
    }
}