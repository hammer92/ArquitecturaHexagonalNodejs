
module.exports = class {

    constructor(AuthUsr, sequelize) {
        this.model = AuthUsr
        this.sequelize = sequelize
    }

    list({ attributes, page, paginate, order, search }) {

        let options = {
            attributes: attributes || ['id', 'userName', 'pkAuthGps', 'state', 'config', 'admin', 'type', 'base'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order

        return  this.model.paginate(options);
    }

    create(Entity) {
        return this.model.create(Entity);
    }

    findById(id) {
        return this.model.findByPk(id);
    }

    findByUserName(userName) {
        return this.model.findOne({
            where: { userName }
        });
    }

    update(id, Data) {
        return this.model.update(Data, {
            where: { id }
        });
    }

    delete(id) {
        return this.model.destroy({
            where: { id }
        });
    }
}