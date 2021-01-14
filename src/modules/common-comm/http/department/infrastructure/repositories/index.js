const depRepository = require('./depRepository')
module.exports = ({ database }, base) => {
    return {
        DepRepository: depRepository(database, base),
    }
}
