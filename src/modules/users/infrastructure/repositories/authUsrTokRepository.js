
module.exports = class {

    constructor( AuthUsrTok, sequelize) {
        this.model = AuthUsrTok
        this.sequelize = sequelize
    }


    create(Entity) {
        return this.model.create(Entity)
    }

    delete(id, PKAuthUsr) {
        return this.model.destroy({
            where: { id, PKAuthUsr }
        });
    }

    check(id, PKAuthUsr){
        return this.model.findOne({
            where: { id, PKAuthUsr }
        });
    }

    updateLastUsedAt(id, PKAuthUsr){
        return this.model.update({
            LastUsedAt: this.sequelize.fn('NOW')
        },{
            where: { id, PKAuthUsr }
        });
    }
}