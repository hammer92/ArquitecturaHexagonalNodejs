const t = require('tcomb')
const { compose } = require('ramda')
const { updatedBy, createdBy, timestamps } = require('src/container/http/domain/attributesBy')

const Setting = t.struct({
  id: t.maybe(t.String),
  icon: t.String,
  name: t.String,
  pKCommMod: t.maybe(t.Number),
  pKScurPer: t.maybe(t.Number),
  ...timestamps(t),
  ...updatedBy(t),
  ...createdBy(t)
})

module.exports = compose(
  Setting
)
