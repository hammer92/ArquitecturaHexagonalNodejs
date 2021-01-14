const t = require('tcomb')
const { compose } = require('ramda')

const City = t.struct({
  id: t.String,
  name: t.String,
  pkCommDep: t.String,
})

module.exports = compose(
  City
)
