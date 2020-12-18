
module.exports = class {

    constructor(AuthUsr, AuthUsrTok, sequelize) {
        this.model = AuthUsr
        this.token = AuthUsrTok
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

    createAuthUsrTok(Entity) {
        return this.token.create(Entity)
    }

    deleteAuthUsrTok(id, PKAuthUsr) {
        return this.token.destroy({
            where: { id, PKAuthUsr }
        });
    }

    checkAuthUsrTok(id, PKAuthUsr){
        return this.token.findOne({
            where: { id, PKAuthUsr }
        });
    }

    updateLastUsedAtAuthUsrTok(id, PKAuthUsr){
        return this.token.update({
            LastUsedAt: this.sequelize.fn('NOW')
        },{
            where: { id, PKAuthUsr }
        });
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