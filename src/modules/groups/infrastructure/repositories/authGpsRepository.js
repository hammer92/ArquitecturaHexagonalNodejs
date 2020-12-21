
module.exports = class {

    constructor(Group, User, sequelize) {
        this.group = Group
        this.user = User
        this.sequelize = sequelize
    }

    list({attributes, page, paginate, order, search}) {

        let options = {
            attributes: attributes || ['id', 'name'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order
        if(search) options['where']['name'] = { [this.sequelize.Op.like]: `%${search}%` }

        return  this.group.paginate(options);
    }

    create(Entity) {
        return this.group.create(Entity);
    }

    findById(id) {
        return this.group.findByPk(id);
    }

    update(id, Data) {
        return this.group.update(Data, {
            where: { id }
        });
    }

    delete(id) {
        return this.group.destroy({
            where: { id }
        });
    }
}