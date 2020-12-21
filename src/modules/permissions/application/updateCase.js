const entity = require('../domain/Entity')
const notFound = require('../domain/exceptions/notFound')
module.exports = class {

    constructor (authPerRepository) {
        this.repository = authPerRepository
    }

    execute ({ idPermission, updateForm }) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idPermission).then((find)=>{

                if(find === null) return reject(new notFound(idPermission))

                const entityFromDB = this.buildEntityFromDB(find)

                for (const field in updateForm) {
                    entityFromDB[field] = updateForm[field]
                }

                this.repository.update(idPermission, entityFromDB).then((update) =>{
                    if(update){
                        resolve(find.reload())
                    }
                }).catch(reject)
            }).catch(reject)

        });
    }

    buildEntityFromDB (itemDB) {
        return new entity({
            id: itemDB.id,
            name: itemDB.name,
            description: itemDB.description,
            action: itemDB.action,
        })
    }
}