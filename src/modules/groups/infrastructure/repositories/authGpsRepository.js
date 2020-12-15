
module.exports = class {

    constructor(Group, User, sequelize) {
        this.group = Group
        this.user = User
        this.sequelize = sequelize
    }

    list({page, paginate, order, search}) {

        let options = {
            attributes: ['id', 'Name'],
            where: {}
        }

        if(page) options["page"] = page
        if(paginate) options["paginate"] = paginate
        if(order) options["order"] = order
        if(search) options['where']['Name'] = { [this.sequelize.Op.like]: `%${search}%` }

        return  this.group.paginate(options);
    }

    create(Entity) {
        return this.group.create(Entity);
    }

    findById(Id) {
        return this.group.findByPk(Id);
    }

    update(Id, Data) {
        return this.group.update(Data, {
            where: {
                id: Id
            }
        });
    }

    delete(Id) {
        return this.group.destroy({
            where: {
                id: Id
            }
        });
    }
}