const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.PARAMS]: Joi.object({
        idUser: Joi.number().required()
    }),
})