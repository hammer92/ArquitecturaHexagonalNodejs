const modRepository = require('./modRepository')
module.exports = ({ database }, base) => {
    return {
        modRepository: modRepository(database, base),
    }
}
