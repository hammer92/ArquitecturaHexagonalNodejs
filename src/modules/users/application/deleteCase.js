module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute (idPermission) {
        return  new Promise((resolve, reject) => {
            this.repository.delete(idPermission).then( destroy => resolve(destroy)).catch(reject)
        });
    }
}