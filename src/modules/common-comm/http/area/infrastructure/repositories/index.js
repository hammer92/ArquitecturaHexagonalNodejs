const areRepository = require('./areRepository')
module.exports = ({ database }, base) => {
    return {
        AreRepository: areRepository(database, base),
    }
}
