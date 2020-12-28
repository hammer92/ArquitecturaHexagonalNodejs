module.exports = class Repository {
    paginate({attributes, page, paginate, order, where}, state = true) {
        let options = {
            where: {state}
        }
        if (attributes) options["attributes"] = attributes.split(',')
        if (page) options["page"] = page
        if (paginate) options["paginate"] = paginate
        if (order) options["order"] = order
        if (where) options['where'] = where

        return this.model.paginate(options);
    }

    create(Entity) {
        return this.model.create(Entity);
    }

    findById(id, state= true) {
        return this.model.findByPk(id,{
            where: {state}
        });
    }

    update(id, Data, state= true) {
        return this.model.update(Data, {
            where: {id, state}
        });
    }

    delete(id) {
        return this.model.update({ state:false },{
            where: {id}
        });
    }
}