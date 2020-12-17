const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.PARAMS]: Joi.object({
        idUser: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object({
        UserName: Joi.string().required(),
        PkAuthGps: Joi.number().required()
    }),
})