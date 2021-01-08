const setRepository = require('./setRepository')
module.exports = ({ database }, base) => {
    return {
        setRepository: setRepository(database, base),
    }
}
