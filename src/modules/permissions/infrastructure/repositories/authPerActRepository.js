
module.exports = class {

    constructor(authPerAct, sequelize) {
        this.model = authPerAct
        this.sequelize = sequelize
    }

    paginate(Base, Type, query){
        let options = {
            attributes: query.attributes || ['id', 'PKAuthPer', 'State'],
            where: { Base, Type }
        }

        if(query.page) options["page"] = query.page
        if(query.paginate) options["paginate"] = query.paginate
        if(query.order) options["order"] = query.order
        // if(query.search) options['where']['Name'] = { [this.sequelize.Op.like]: `%${query.search}%` }

        return  this.model.paginate(options);

    }

    create(Entity) {
        return this.model.create(Entity);
    }

    updateOrCreate(Entity, condition) {
        const $this = this
        return this.model
            .findOne({ where: condition })
            .then(function(obj) {
                // update
                if(obj){
                    Entity.State = !obj.State
                    return obj.update(Entity);
                }
                // insert
                return $this.model.create(Entity);
            })
    }

    findByType({ PKAuthPer, Type, Base }) {
        return this.model.findOne({
            where: { PKAuthPer, Type, Base }
        });
    }
}