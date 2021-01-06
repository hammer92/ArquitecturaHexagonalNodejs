const globModule = require('src/container/utils/globModule')

module.exports = ({ repository }) => {
  const caseUseModule = {}
  const base = {}

  const cases = globModule('application/index.js')
  Object.keys(cases).forEach(modelName => caseUseModule[modelName] = require(cases[modelName])({ repository }, base));

  return caseUseModule
}