const UsrRepository = require('./usrRepository')
module.exports = ({ database }, base) => {
    return {
        UsrRepository: UsrRepository(database, base),
    }
}
