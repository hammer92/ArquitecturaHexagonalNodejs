const t = require('tcomb')
const { compose } = require('ramda')
const { updatedBy, createdBy, timestamps } = require('src/container/http/domain/attributesBy')

const Permission = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  description: t.maybe(t.String),
  action: t.String,
  ...timestamps(t),
  ...updatedBy(t),
  ...createdBy(t)
})

module.exports = compose(
  Permission
)
