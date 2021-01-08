const t = require('tcomb')
const { compose } = require('ramda')
const { updatedBy, createdBy, timestamps } = require('src/container/http/domain/attributesBy')

const Group = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  ...timestamps(t),
  ...updatedBy(t),
  ...createdBy(t)
})

module.exports = compose(
  Group
)
