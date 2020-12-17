const entity = require('../domain/Entity')
const notFound = require('../domain/exceptions/notFound')
module.exports = class {

    constructor (authUsrRepository) {
        this.repository = authUsrRepository
    }

    execute ({ idUser, updateForm }) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idUser).then((find)=>{

                const entityFromDB = this.buildEntityFromDB(find)

                for (const field in updateForm) {
                    entityFromDB[field] = updateForm[field]
                }

                this.repository.update(idUser, entityFromDB).then((update) =>{
                    if(update){
                        resolve(find.reload())
                    }
                }).catch(reject)
            }).catch(() => {
                reject(new notFound(idUser))
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