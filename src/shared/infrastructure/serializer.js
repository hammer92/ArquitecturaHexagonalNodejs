const {isCelebrateError} = require('celebrate');
const NotFound = require('../domain/exceptions/NotFound')

const jsonError = ({title, status, message}, res) => {
    return res.status(status || 500).json({
        error: {
            title: title || "Error",
            detail: message || "Interno del servidor"
        }
    })
}
const json = ({status, data}, res) => {
    return res.status(status || 500).json({
        data
    })
}
const ResponseError = {
    jsonError,
    _404(req, res, next) {
        const err = new NotFound(req.originalUrl)
        next(err);
    },

    internal(err, req, res, next) {
        return jsonError(err, res)
    },

    fromValidation(err, req, res, next) {
        if (!isCelebrateError(err)) return next(err)

        const errors = {};
        for (const [segment, joiError] of err.details.entries()) {
            // console.log(joiError.details)
            errors[segment] = joiError.details.map((detail) => {
                return {message: detail.message, ...detail.context}
            })
        }

        return jsonError({
            status: 400,
            title: err.message,
            message: errors
        }, res)
    }
}

const Response = {
    valid({status, data }, res) {
        return json({
            status: status || 200,
            data: data || null
        }, res)
    }
}

module.exports = {
    ResponseError,
    Response,
}