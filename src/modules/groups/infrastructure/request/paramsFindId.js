const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.PARAMS]: Joi.object({
        idGroup: Joi.number().required()
    }),
})