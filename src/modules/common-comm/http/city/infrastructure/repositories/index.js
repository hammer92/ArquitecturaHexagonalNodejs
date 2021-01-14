const citRepository = require('./citRepository')
module.exports = ({ database }, base) => {
    return {
        CitRepository: citRepository(database, base),
    }
}
