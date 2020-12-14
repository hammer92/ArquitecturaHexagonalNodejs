module.exports = class extends Error {
    constructor (details = '') {
        super('Group not found. ' + details)
        this.status = 404
    }
}