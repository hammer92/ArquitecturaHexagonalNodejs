const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.QUERY]: Joi.object({
        include: Joi.array(),
        limit: Joi.number(),
        offset: Joi.number()
    }),
    [Segments.BODY]: Joi.object({
        Name: Joi.string().required(),
    }),
})