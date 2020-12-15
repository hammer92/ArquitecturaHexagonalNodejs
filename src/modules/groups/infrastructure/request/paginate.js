const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.QUERY]: Joi.object({
        attributes: Joi.array(),
        order: Joi.array(),
        page: Joi.number(),
        paginate: Joi.number(),
        search: Joi.string()
    })
})