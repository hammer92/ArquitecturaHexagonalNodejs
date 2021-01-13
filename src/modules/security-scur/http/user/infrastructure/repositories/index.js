const UsrRepository = require('./usrRepository')
const TokRepository = require('./tokRepository')
module.exports = ({ database }, base) => {
    return {
        UsrRepository: UsrRepository(database, base),
        TokRepository: TokRepository(database, base),
    }
}
