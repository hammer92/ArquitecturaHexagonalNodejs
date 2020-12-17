module.exports = class {

    constructor(authPerAct, AuthUsr, sequelize) {
        this.model = authPerAct
        this.user = AuthUsr
        this.sequelize = sequelize
    }

    paginate(Base, Type, query) {
        let options = {
            attributes: query.attributes || ['id', 'PKAuthPer', 'State'],
            where: {Base, Type}
        }

        if (query.page) options["page"] = query.page
        if (query.paginate) options["paginate"] = query.paginate
        if (query.order) options["order"] = query.order
        // if(query.search) options['where']['Name'] = { [this.sequelize.Op.like]: `%${query.search}%` }

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
                    Entity.State = !obj.State
                    return obj.update(Entity);
                }
                // insert
                return $this.model.create(Entity);
            })
    }

    check({PKAuthPer, idUser}) {
        const $this = this
        return  new Promise((resolve, reject) => {
            $this.user.findByPk(idUser).then((User) => {
                if(User.Admin) return resolve({ State:true })
                $this.model.findOne({
                    attributes: ['State', 'Type'],
                    where: {
                        PKAuthPer,
                        [this.sequelize.Op.or]: [
                            {Type: "AuthUsr", Base: User.id},
                            {Type: "AuthGps", Base: User.PkAuthGps},
                        ]
                    },
                    order: [
                        ['Type', 'DESC']
                    ]
                }).then(resolve).catch(reject)
            }).catch(reject)
        })

    }
}