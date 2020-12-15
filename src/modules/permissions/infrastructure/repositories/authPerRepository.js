
module.exports = class {

    constructor(authPer, User, sequelize) {
        this.model = authPer
        this.sequelize = sequelize
    }

    list({ attributes, page, paginate, order, search }) {

        let options = {
            attributes: attributes || ['id', 'Name', 'Action'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order
        if(search) options['where']['Name'] = { [this.sequelize.Op.like]: `%${search}%` }

        return  this.model.paginate(options);
    }

    create(Entity) {
        return this.model.create(Entity);
    }

    findById(Id) {
        return this.model.findByPk(Id);
    }

    update(Id, Data) {
        return this.model.update(Data, {
            where: {
                id: Id
            }
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