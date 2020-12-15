module.exports = class {

    constructor (authPerRepository) {
        this.repository = authPerRepository
    }

    execute (idPermission) {
        return  new Promise((resolve, reject) => {
            this.repository.delete(idPermission).then( destroy => resolve(destroy)).catch(reject)
        });
    }
}