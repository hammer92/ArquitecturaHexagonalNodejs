module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute (idGroup) {
        return  new Promise((resolve, reject) => {
            this.repository.delete(idGroup).then( destroy => resolve(destroy)).catch(reject)
        });
    }
}