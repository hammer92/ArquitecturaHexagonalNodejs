const { celebrate, Joi, Segments  } = require('celebrate')

module.exports = celebrate({
    [Segments.BODY]: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        action: Joi.string().required(),
    }),
})