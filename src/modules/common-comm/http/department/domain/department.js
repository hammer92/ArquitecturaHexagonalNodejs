const t = require('tcomb')
const { compose } = require('ramda')

const Department = t.struct({
  id: t.String,
  name: t.String,
})

module.exports = compose(
  Department
)
