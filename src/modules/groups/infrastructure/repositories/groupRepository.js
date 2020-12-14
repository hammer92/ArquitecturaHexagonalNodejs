
module.exports = class {

    constructor(Group, User, sequelize) {
        this.group = Group
        this.user = User
        this.sequelize = sequelize
    }

    list() {
        return this.group.findAll({ include: this.user});
        // return this.sequelize.query('SELECT Id, "Name" FROM "AuthGps"', { type: QueryTypes.SELECT })
    }

    create(Entity) {
        return this.group.create(Entity);
    }

    findById(Id) {
        return this.group.findOne(
            {
                where: {
                    id: Id
                }
            }
        );
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