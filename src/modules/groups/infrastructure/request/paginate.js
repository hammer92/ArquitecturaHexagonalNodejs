const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
    [Segments.QUERY]: Joi.object({
        attributes: Joi.string(),
        order: Joi.array(),
        page: Joi.number(),
        paginate: Joi.number(),
        where: Joi.array()
    })
})