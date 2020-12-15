const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.PARAMS]: Joi.object({
        idPermission: Joi.number().required()
    }),
})