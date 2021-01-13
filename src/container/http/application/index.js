const globModule = require('src/container/utils/globModule')
const { assoc } = require('ramda')

module.exports = ({ repository }) => {
  const caseUseModule = {}
  const base = {}

  const cases = globModule('http/**/application/index.js')

  Object.keys(cases).forEach(modelName =>{
    const [modules, app] = modelName.split('.')
    const caseModel = require(cases[modelName])({ repository }, base)
    caseUseModule[modules] = assoc(app,caseModel, caseUseModule[modules] || {})
  })

  return caseUseModule
}