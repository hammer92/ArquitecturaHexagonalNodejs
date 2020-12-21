
module.exports = class {

    constructor(authPer, User, sequelize) {
        this.model = authPer
        this.sequelize = sequelize
    }

    list({ attributes, page, paginate, order, search }) {

        let options = {
            attributes: attributes || ['id', 'name', 'action'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order
        if(search) options['where']['name'] = { [this.sequelize.Op.like]: `%${search}%` }

        return  this.model.paginate(options);
    }

    create(Entity) {
        return this.model.create(Entity);
    }

    findById(Id) {
        return this.model.findByPk(Id);
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