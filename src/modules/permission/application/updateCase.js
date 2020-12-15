const entity = require('../domain/Entity')
const notFound = require('../domain/exceptions/notFound')
module.exports = class {

    constructor (Repository) {
        this.repository = Repository
    }

    execute ({ idPermission, updateForm }) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idPermission).then((find)=>{

                const entityFromDB = this.buildEntityFromDB(find)

                for (const field in updateForm) {
                    entityFromDB[field] = updateForm[field]
                }

                this.repository.update(idPermission, entityFromDB).then((update) =>{
                    if(update){
                        resolve(find.reload())
                    }
                }).catch(reject)
            }).catch(() => {
                reject(new notFound(idPermission))
            })

        });
    }

    buildEntityFromDB (itemDB) {
        return new entity({
            Id: itemDB.Id,
            Name: itemDB.Name,
            Description: itemDB.Description,
            Action: itemDB.Action,
        })
    }
}