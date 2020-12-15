const GroupEntity = require('../domain/Entity')
const notFound = require('../domain/exceptions/groupNotFound')
module.exports = class {

    constructor (authGpsRepository) {
        this.repository = authGpsRepository
    }

    execute ({ idGroup, updateForm }) {
        return  new Promise((resolve, reject) => {
            this.repository.findById(idGroup).then((find)=>{

                const groupEntity = this.buildEntityFromDB(find)

                for (const field in updateForm) {
                    groupEntity[field] = updateForm[field]
                }

                this.repository.update(idGroup, groupEntity).then((update) =>{
                    if(update){
                        resolve(find.reload())
                    }
                }).catch(reject)
            }).catch(() => {
                reject(new notFound(idGroup))
            })

        });
    }

    buildEntityFromDB (itemDB) {
        return new GroupEntity({
            Id: itemDB.Id,
            Name: itemDB.Name,
        })
    }
}