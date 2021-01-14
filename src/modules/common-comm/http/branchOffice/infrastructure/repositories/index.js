const bofRepository = require('./bofRepository')
module.exports = ({ database }, base) => {
    return {
        BofRepository: bofRepository(database, base),
    }
}
