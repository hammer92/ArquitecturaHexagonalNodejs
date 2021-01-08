const menRepository = require('./menRepository')
module.exports = ({ database }, base) => {
    return {
        menRepository: menRepository(database, base),
    }
}
