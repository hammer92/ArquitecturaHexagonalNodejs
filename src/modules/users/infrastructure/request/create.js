const { celebrate, Joi, Segments  } = require('celebrate')

module.exports = celebrate({
    [Segments.BODY]: Joi.object({
        userName: Joi.string().required(),
        password: Joi.string().required(),
        pkAuthGps: Joi.number().required()
    }),
})