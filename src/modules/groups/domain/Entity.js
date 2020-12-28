const { domain } = require('../../../shared')
module.exports = class extends domain.entry {

    constructor ({ id = null,  name, state}) {
        super();
        this.id = id
        this.state = state || true
        this.name = name
    }
}