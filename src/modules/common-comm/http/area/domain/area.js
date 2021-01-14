const t = require('tcomb')
const { compose } = require('ramda')
const { updatedBy, createdBy, timestamps } = require('src/container/http/domain/attributesBy')

const Area = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  pkCommAre: t.maybe(t.Number),
  ...timestamps(t),
  ...updatedBy(t),
  ...createdBy(t)
})

module.exports = compose(
  Area
)
