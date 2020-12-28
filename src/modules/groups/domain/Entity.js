const Entry = require('../../../shared/domain/entry')
module.exports = class GroupEntry extends Entry  {

    constructor ({ id = null,  name, state}) {
        super();
        this.id = id
        this.state = state || true
        this.name = name
    }
}