const { celebrate, Joi, Segments  } = require('celebrate')

module.exports = celebrate({
    [Segments.BODY]: Joi.object({
        Name: Joi.string().required(),
    }),
})