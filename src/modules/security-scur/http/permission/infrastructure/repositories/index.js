const PerRepository = require('./perRepository')
module.exports = ({ database }, base) => {
    return {
        PerRepository: PerRepository(database, base),
    }
}
