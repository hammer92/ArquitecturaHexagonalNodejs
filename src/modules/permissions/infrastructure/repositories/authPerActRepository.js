module.exports = class {

    constructor({authPerAct, AuthUsr, AuthGps, sequelize}) {
        this.model = authPerAct
        this.user = AuthUsr
        this.group = AuthGps
        this.sequelize = sequelize
    }

    existType(type, id){
        if(type === "AuthUsr") return this.user.findByPk(id)
        if(type === "AuthGps") return this.group.findByPk(id)
    }

    paginate(base, type, query) {
        let options = {
            attributes: query.attributes || ['id', 'pKAuthPer', 'state'],
            where: {base, type}
        }

        if (query.page) options["page"] = query.page
        if (query.paginate) options["paginate"] = query.paginate
        if (query.order) options["order"] = query.order

        return this.model.paginate(options);

    }

    create(Entity) {
        return this.model.create(Entity);
    }

    updateOrCreate(Entity, condition) {
        const $this = this
        return this.model
            .findOne({where: condition})
            .then(function (obj) {
                // update
                if (obj) {
                    Entity.state = !obj.state
                    return obj.update(Entity);
                }
                // insert
                return $this.model.create(Entity);
            })
    }

    check({pKAuthPer, idUser}) {
        const $this = this
        return  new Promise((resolve, reject) => {
            $this.user.findByPk(idUser).then(({ id, admin, pkAuthGps }) => {
                if(admin) return resolve({ state:true })
                $this.model.findOne({
                    attributes: ['state', 'type'],
                    where: {
                        pKAuthPer,
                        [this.sequelize.Op.or]: [
                            {type: "AuthUsr", base: id},
                            {type: "AuthGps", base: pkAuthGps},
                        ]
                    },
                    order: [
                        ['type', 'DESC']
                    ]
                }).then(resolve).catch(reject)
            }).catch(reject)
        })

    }
}