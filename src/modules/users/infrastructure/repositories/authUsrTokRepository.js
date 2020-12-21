
module.exports = class {

    constructor( AuthUsrTok, sequelize) {
        this.model = AuthUsrTok
        this.sequelize = sequelize
    }


    create(Entity) {
        return this.model.create(Entity)
    }

    delete(id, pKAuthUsr) {
        return this.model.destroy({
            where: { id, pKAuthUsr }
        });
    }

    check(id, pKAuthUsr){
        return this.model.findOne({
            where: { id, pKAuthUsr }
        });
    }

    updateLastUsedAt(id, pKAuthUsr){
        return this.model.update({
            lastUsedAt: this.sequelize.fn('NOW')
        },{
            where: { id, pKAuthUsr }
        });
    }
}