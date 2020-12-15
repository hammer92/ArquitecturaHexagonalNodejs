const { celebrate, Joi, Segments  } = require('celebrate')

module.exports = celebrate({
    [Segments.BODY]: Joi.object({
        UserName: Joi.string().required(),
        Password: Joi.string().required(),
        PkAuthGps: Joi.number().required()
    }),
})