const shareSerializer = require('../../../../shared/infrastructure/serializer')
module.exports = {
    error: shareSerializer.ResponseError,
    response: shareSerializer.Response
}