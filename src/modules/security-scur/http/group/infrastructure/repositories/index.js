const GpsRepository = require('./gpsRepository')
module.exports = ({ database }, base) => {
    return {
        GpsRepository: GpsRepository(database, base),
    }
}
