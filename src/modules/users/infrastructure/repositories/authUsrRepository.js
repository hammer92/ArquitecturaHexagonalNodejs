
module.exports = class {

    constructor(AuthUsr, sequelize) {
        this.model = AuthUsr
        this.sequelize = sequelize
    }

    list({ attributes, page, paginate, order, search }) {

        let options = {
            attributes: attributes || ['id', 'UserName', 'PkAuthGps', 'State', 'Config', 'Admin', 'Type', 'Base'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order
        // if(search) options['where']['Name'] = { [this.sequelize.Op.like]: `%${search}%` }

        return  this.model.paginate(options);
    }

    create(Entity) {
        return this.model.create(Entity);
    }

    findById(Id) {
        return this.model.findByPk(Id);
    }

    findByUserName(UserName) {
        return this.model.findOne({
            where: { UserName }
        });
    }

    update(id, Data) {
        return this.model.update(Data, {
            where: { id }
        });
    }

    delete(Id) {
        return this.model.destroy({
            where: {
                id: Id
            }
        });
    }
}