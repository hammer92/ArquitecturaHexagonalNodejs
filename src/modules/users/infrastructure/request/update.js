const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.PARAMS]: Joi.object({
        idUser: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object({
        userName: Joi.string().required(),
        pkAuthGps: Joi.number().required()
    }),
})