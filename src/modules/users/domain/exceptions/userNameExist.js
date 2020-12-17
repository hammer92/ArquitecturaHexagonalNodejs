module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Usuario ya Existe'
        this.status = 404
    }
}